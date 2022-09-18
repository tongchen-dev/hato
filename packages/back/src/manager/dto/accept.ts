import { IsIn, IsNotEmptyObject } from 'class-validator';
import { ContributorInfo, FixEventPayload } from '../../interface/public';
import { review_queue } from '../../Entity/review';

export class SubmitData {
  id: string;
  @IsIn(['feat', 'fix'], { message: '参数错误' })
  type: 'feat' | 'fix';
  featPayload: Omit<SubmitFeat, 'id'>;
  fixPayload: Omit<SubmitFix, 'id'>;
  @IsNotEmptyObject()
  contributor: ContributorInfo;
}

export class SubmitFeat {
  id: string;
  accept: review_queue['contribution'];
  refuse: {
    item: review_queue['contribution'][];
    reason: string[];
  };
  contributor: ContributorInfo;
}

export class SubmitFix {
  id: string;
  accept: FixEventPayload;
  refuse: {
    item: FixEventPayload;
    reason: string[];
  };
  contributor: ContributorInfo;
}
