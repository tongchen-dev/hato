import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Contribution as Contribution } from '../Entity/contirbution';
import { contribution_info } from '../Entity/contribution_info';
import { Contributor } from '../Entity/contributor';
import { review_queue } from '../Entity/review';
import { FeatPayload } from '../interface/public';
import { BadReqeust, ServerError } from '../shared/Exception/customException';
import { SelectQueryBuilder, Repository, Connection } from 'typeorm';
import { SubmitFeat, SubmitFix } from './dto/accept';
import { fixContribution } from './utils/fixContribution';
import { updateContributorInfo } from './utils/updateContributiorInfo';
import { find, isEmpty } from 'lodash';
import { featContribution } from './utils/featContribution';
import { query } from 'express';

@Injectable()
export class ManagerService {
  private builder: {
    contributor: SelectQueryBuilder<Contributor>;
    contribution: SelectQueryBuilder<Contribution>;
    contribution_info: SelectQueryBuilder<contribution_info>;
    reviewQueueRespository: SelectQueryBuilder<review_queue>;
  };
  private queryRunner;
  constructor(
    @InjectRepository(Contributor)
    private contributorRepository: Repository<Contributor>,
    @InjectRepository(Contribution)
    private contributionRepository: Repository<Contribution>,
    @InjectRepository(contribution_info)
    private contribution_infoRepository: Repository<contribution_info>,
    @InjectRepository(review_queue)
    private reviewQueueRespository: Repository<review_queue>,
    private readonly connection: Connection,
  ) {
    this.builder = {
      contribution: this.contributionRepository.createQueryBuilder(),
      contributor: this.contributorRepository.createQueryBuilder(),
      contribution_info: this.contribution_infoRepository.createQueryBuilder(),
      reviewQueueRespository: this.reviewQueueRespository.createQueryBuilder(),
    };
  }
  async getAllEvent() {
    return this.builder.reviewQueueRespository
      .select()
      .execute()
      .then((res) => res)
      .catch(() => {
        throw new ServerError();
      });
  }
  async acceptFix(dto: SubmitFix) {
    const { id, accept, refuse, contributor } = dto;
    if (
      accept?.newEvent?.length !== accept?.oldEvent?.length ||
      refuse?.item?.newEvent?.length !== refuse?.item?.oldEvent?.length
    ) {
      throw new BadReqeust();
    }
    const runner = this.connection.createQueryRunner();
    const reviewRunner = runner.manager.getRepository(review_queue);
    const queryResult = await reviewRunner.findOneBy({ id });
    await runner.connect();
    await runner.startTransaction();
    const contribution_total = accept.newEvent?.length ?? 0;
    try {
      for (let i = 0; i < accept.oldEvent.length; i++) {
        const newPayload = accept.newEvent[i];
        const oldPayload = accept.oldEvent[i];
        await fixContribution(
          runner,
          this.contributionRepository,
          oldPayload,
          newPayload,
          contributor,
        );
        await updateContributorInfo(
          runner,
          contributor,
          newPayload,
          queryResult.type,
        );
      }
      await runner.commitTransaction();
    } catch {
      await runner.rollbackTransaction();
    } finally {
      await runner.release();
    }
    const mailerInfo = {
      refuseTotal: refuse.item.newEvent?.length,
      contribution_total,
      contribution_type:
        queryResult.contribution_type == 'pic' ? '二创图片' : '事件',
    };
    return mailerInfo;
  }
  async acceptFeat(dto: SubmitFeat) {
    //
    const { id, accept, refuse, contributor } = dto;
    const runner = this.connection.createQueryRunner();
    await runner.connect();
    const reviewRunner = runner.manager.getRepository(review_queue);
    const queryResult = await reviewRunner.findOneBy({
      id,
    });
    if (isEmpty(queryResult)) {
      throw new BadReqeust('参数错误');
    }
    let contribution_total = refuse?.item.length ?? 0;
    await runner.startTransaction();
    try {
      contribution_total += (accept as FeatPayload[]).length;
      console.log(accept);
      for (let i = 0; i < (accept as FeatPayload[]).length; i++) {
        const payload: FeatPayload = accept[i];
        if (find(queryResult.contribution as FeatPayload[], payload)) {
          await featContribution(
            runner,
            payload,
            queryResult.contribution_type,
            contributor,
          );
          await updateContributorInfo(
            runner,
            contributor,
            payload,
            queryResult.type,
          );
        } else {
          throw new BadReqeust('参数错误');
        }
      }
      await runner.commitTransaction();
    } catch (e) {
      await runner.rollbackTransaction();
      throw new BadReqeust((e as Error).message);
    } finally {
      await runner.release();
    }
    const mailerInfo = {
      refuseTotal: refuse?.item.length ?? 0,
      contribution_total,
      contribution_type:
        queryResult.contribution_type == 'pic' ? '二创图片' : '事件',
    };
    return mailerInfo;
  }

  async getAllContribution(
    contributor_name: string,
    contributor_email: string,
  ) {
    return (
      await this.builder.contribution
        .select(['Contribution.payload'])
        .where('type = :type', { type: 'event' })
        .andWhere('contributor @> :contributorInfo', {
          contributorInfo: JSON.stringify([
            {
              name: contributor_name,
              email: contributor_email,
            },
          ]),
        })
        .limit(20)
        .execute()
    ).map((value) => value.Contribution_payload);
  }
}
