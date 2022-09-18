import { contribution_info } from 'src/Entity/contribution_info';
import { QueryRunner } from 'typeorm';

export async function updateContributionInfo(
  runner: QueryRunner,
  name: string,
  total: number,
) {
  const contributionInfo = new contribution_info();
  contributionInfo.name = name;
  contributionInfo.count = total;
  await runner.manager.save(contribution_info);
}
