import { isEmpty } from 'lodash';
import { Contributor } from '../../Entity/contributor';
import { ServerError } from '../../shared/Exception/customException';
import { QueryRunner } from 'typeorm';
import {
  ContributorInfo,
  FeatPayload,
  Event,
  Pic,
} from '../../interface/public';

interface contributionPayloadData {
  title: string;
  contributionType: 'feat' | 'fix';
}

export async function updateContributorInfo(
  runner: QueryRunner,
  contributorInfo: ContributorInfo,
  data: FeatPayload | Event | Pic,
  contribution_type: 'feat' | 'fix',
) {
  const { name, email } = contributorInfo;
  try {
    const contributorRes = await runner.manager.findOneBy(Contributor, {
      name,
      email,
    });
    const repository = runner.manager.getRepository(Contributor);
    const builder = await repository.createQueryBuilder().select();
    const res = await builder
      .where(`((contribution->'data')::jsonb) @> :payload `, {
        payload: JSON.stringify([
          {
            title: data.name,
            contributionType: contribution_type,
          },
        ]),
      })
      .execute();
    const canUpdateContributor = isEmpty(res);
    if (canUpdateContributor) {
      const needCreateContributor = isEmpty(contributorRes);
      const newPayload: contributionPayloadData[] = [];
      const updatePayloadData: contributionPayloadData = {
        title: data.name,
        contributionType: contribution_type,
      };
      if (isEmpty(contributorRes)) {
        newPayload.push(updatePayloadData);
      } else {
        contributorRes.contribution.data.push(updatePayloadData);
        contributorRes.contribution.count =
          contributorRes.contribution.data.length;
        await runner.manager.save(contributorRes);
      }
      if (needCreateContributor) {
        const info = new Contributor();
        info.name = name;
        info.email = email;
        info.contribution = {
          data: [...newPayload],
          count: newPayload.length,
        };
        await runner.manager.save(info);
      }
    }
    return contributorRes?.contribution.count;
  } catch (e) {
    console.log(e);
    throw new ServerError(e);
  }
}
