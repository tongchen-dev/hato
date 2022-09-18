import { Contribution } from '../../Entity/contirbution';
import { QueryRunner, Repository } from 'typeorm';
import { ContributorInfo, Event } from '../../interface/public';
import { find, isEmpty } from 'lodash';
import { BadReqeust } from '../../shared/Exception/customException';
import { deepOmit } from '../../shared/types/helper-types';

export async function fixContribution(
  runner: QueryRunner,
  contributionRepository: Repository<Contribution>,
  oldEvent: Event,
  newEvent: Event,
  Contributor: ContributorInfo,
) {
  try {
    const event = oldEvent;
    const res = await contributionRepository.findOneBy({
      title: event.name,
    });
    console.log(event);
    if (!isEmpty(res)) {
      const { date, name } = newEvent;
      if (!find(res.contributor, Contributor)) {
        res.contributor.push(Contributor);
      }
      (res.payload as unknown as deepOmit<typeof res.payload, 'contributor'>) =
        {
          name,
          date,
        };
      await contributionRepository.save(res);
    }
  } catch (e) {
    throw new BadReqeust();
  }
}
