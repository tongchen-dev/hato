import { ContributorInfo } from './public';

export interface IContribution {
  data: {
    title: string;
    contributionType: 'feat' | 'fix';
  }[];
  count: number;
}

export interface ContributionInfo {
  count: number;
  id: number;
  name: string;
}

export interface Contributor {
  /**
   * 贡献信息
   */
  contribution: IContribution[];
  /**
   * 贡献者邮箱
   */
  email: string;
  id: string;
  /**
   * 贡献者昵称
   */
  name: string;
}

export interface ReviewQueue {
  contributionType: string;
  contribution: IContribution[];
  contributorInfo: ContributorInfo;
  id: string;
}
