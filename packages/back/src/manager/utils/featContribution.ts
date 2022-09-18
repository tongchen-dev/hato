import { QueryRunner } from 'typeorm';
import { SubmitFeat } from '../dto/accept';
import { Contribution } from '../../Entity/contirbution';
import { ContributorInfo, FeatPayload } from '../../interface/public';
import { randomUUID } from 'crypto';
import { BadReqeust } from '../../shared/Exception/customException';
import { isEmpty } from 'lodash';

export async function featContribution(
  runner: QueryRunner,
  data: FeatPayload,
  contributionType: 'pic' | 'event',
  contributor: ContributorInfo,
) {
  const contribution = new Contribution();
  const builder = runner.manager
    .getRepository(Contribution)
    .createQueryBuilder();
  try {
    let res: any = [];
    if (contributionType === 'event') {
      res = await builder
        .select()
        .where('payload::jsonb @> :payload', {
          payload: { name: data.name, date: data.date },
        })
        .execute();
    }
    if (isEmpty(res)) {
      contribution.id = randomUUID();
      contribution.contributor = [contributor];
      contribution.title = data.name;
      contribution.type = contributionType;
      contribution.payload = data;
      await runner.manager.save(contribution);
    }
  } catch (e) {
    console.log(e);
    throw new BadReqeust();
  }
}
