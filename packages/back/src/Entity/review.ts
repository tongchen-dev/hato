import {
  ContributorInfo,
  FixEventPayload,
  FeatPayload,
} from '../interface/public';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class review_queue {
  @PrimaryColumn('uuid')
  id: string;
  @Column('json')
  contribution: FixEventPayload | FeatPayload[];
  @Column('json')
  contributor_info: ContributorInfo;
  @Column('text')
  title: string;
  @Column('text')
  type: 'feat' | 'fix';
  @Column('text')
  contribution_type: 'pic' | 'event';
}
