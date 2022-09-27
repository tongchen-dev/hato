import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Contribution } from '../Entity/contirbution';
import { contribution_info } from '../Entity/contribution_info';
import { Contributor } from '../Entity/contributor';
import { review_queue } from '../Entity/review';
import { BadReqeust, ServerError } from '../shared/Exception/customException';
import { Repository, SelectQueryBuilder } from 'typeorm';
import {
  contribution as contributionDTO,
  updateContribution,
} from './dto/contribution.dto';
import { randomUUID } from 'crypto';
import { FeatPayload, FixEventPayload } from '../interface/public';
import { isEmpty } from 'lodash';
import { useHash } from 'src/shared/utils/useHash';
@Injectable()
export class ContributionService {
  private builder: {
    contributor: SelectQueryBuilder<Contributor>;
    contribution: SelectQueryBuilder<Contribution>;
    contribution_info: SelectQueryBuilder<contribution_info>;
    review: SelectQueryBuilder<review_queue>;
  };
  constructor(
    @InjectRepository(Contributor)
    private contributorRepository: Repository<Contributor>,
    @InjectRepository(Contribution)
    private contributionRepository: Repository<Contribution>,
    @InjectRepository(contribution_info)
    private contribution_infoRepository: Repository<contribution_info>,
    @InjectRepository(review_queue)
    private reviewQueueRespository: Repository<review_queue>,
  ) {
    this.builder = {
      contribution: this.contributionRepository.createQueryBuilder(),
      contributor: this.contributorRepository.createQueryBuilder(),
      contribution_info: this.contribution_infoRepository.createQueryBuilder(),
      review: this.reviewQueueRespository.createQueryBuilder(),
    };
  }
  getAll() {
    return this.builder.contribution
      .select()
      .execute()
      .then((res) => res)
      .catch(() => {
        throw new BadReqeust('参数错误');
      });
  }

  async contribution(data: contributionDTO) {
    const { title, type, payload, contribution_type, contributor } = data;
    const { name, email, password } = contributor;
    let user;
    if (contribution_type === 'pic') {
      if (type === 'fix') {
        throw new BadReqeust();
      }
    }
    if (contributor) {
      const contributorInfo = await this.builder.contributor
        .select()
        .where('name = :name', { name })
        .andWhere('email = :email', { email })
        .execute();
      const hashPassword = useHash(password);
      if (isEmpty(contributorInfo)) {
        await this.builder.contributor
          .insert()
          .values({
            email,
            name,
            password: hashPassword,
            contribution: {},
          })
          .execute();
      } else {
        user = (contributorInfo as any[]).filter((v) => {
          return v.Contributor_password === hashPassword;
        });
        if (isEmpty(user)) {
          throw new BadReqeust('密码错误');
        }
      }
    }
    contributor['password'] = undefined;
    const contributionData: FeatPayload[] = (payload as FeatPayload[]).map(
      (item) => ({
        ...item,
        contributor,
      }),
    );
    const review = new review_queue();
    review.id = randomUUID();
    review.contribution = { ...contributionData } as any;
    review.contributor_info = contributor;
    review.contribution_type = contribution_type;
    review.type = type;
    review.title = title;
    try {
      await this.reviewQueueRespository.save(review);
    } catch (e) {
      throw new ServerError(e.message);
    }
  }

  async updateContribution(data: updateContribution) {
    const { title, oldEvents, newEvents, contributor, type } = data;
    if (oldEvents.length !== newEvents.length) {
      throw new BadReqeust();
    }
    const id = randomUUID({ disableEntropyCache: true });
    const review = new review_queue();
    review.id = id;
    review.title = title;
    review.type = type;
    review.contributor_info = contributor;
    review.contribution_type = 'event';
    (review.contribution as FixEventPayload) = {
      newEvent: newEvents,
      oldEvent: oldEvents,
    };
    this.reviewQueueRespository.save(review).catch(() => {
      throw new BadReqeust();
    });
  }
}
