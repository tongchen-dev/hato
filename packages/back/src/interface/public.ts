export interface ContributorInfo {
  /**
   * 贡献者邮箱
   */
  email: string;
  /**
   * 贡献者名称
   */
  name: string;
}

export interface ContributorInfo {
  /**
   * 贡献者邮箱
   */
  email: string;
  /**
   * 贡献者名称
   */
  name: string;
}
export interface Event {
  contributor: ContributorInfo;
  /**
   * 事件发生事件
   */
  date: string;
  /**
   * 事件名
   */
  name: string;
}

/**
 * contributor_info
 */
export interface ContributorInfo {
  /**
   * 贡献者邮箱
   */
  email: string;
  /**
   * 贡献者名称
   */
  name: string;
  /**
   * 密码
   */
  password: string;
}

export interface Pic {
  contributor: ContributorInfo;
  /**
   * 图片二创的简介
   */
  description: string;
  /**
   * 图片二创标题
   */
  name: string;
  /**
   * 图片二传的url集合
   */
  url: string[];
  date: string;
}

/**
 * contributor_info
 */
export interface ContributorInfo {
  /**
   * 贡献者邮箱
   */
  email: string;
  /**
   * 贡献者名称
   */
  name: string;
}

export type FeatPayload = Event | Pic;

export interface FixEventPayload {
  oldEvent: Event[];
  newEvent: Event[];
}
