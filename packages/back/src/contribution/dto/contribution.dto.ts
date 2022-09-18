import {
  IsArray,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNotIn,
} from 'class-validator';
import {
  ContributorInfo,
  Event,
  FeatPayload,
  FixEventPayload,
  Pic,
} from 'src/interface/public';

export type deepOmit<
  T extends (Event[] | Pic[]) | any,
  K extends string | number,
> = T extends Array<infer R>
  ? deepOmit<R, K>
  : {
      [P in Exclude<keyof T, K>]: T[P];
    }[];

export class contribution {
  @IsNotEmpty()
  title: string;
  @IsArray()
  // payload: deepOmit<Event[] | Pic[], 'contributor'>;
  // payload: Event[] | Pic[];
  payload: FeatPayload[] | FixEventPayload;
  @IsNotEmpty()
  contribution_type: 'event' | 'pic';
  @IsNotEmpty()
  type: 'fix' | 'feat';
  @IsNotEmpty()
  contributor: ContributorInfo;
}

export class updateContribution {
  @IsNotEmpty()
  title: string;
  @IsArray()
  oldEvents: Event[];
  @IsArray()
  newEvents: Event[];
  @IsNotEmptyObject()
  contributor: ContributorInfo;
  @IsNotIn(['feat'])
  type: 'fix' | 'feat';
}
