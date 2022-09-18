import { IContribution } from '../interface/db';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Contributor {
  @PrimaryColumn('uuid')
  id: string;
  @Column('text')
  name: string;
  @Column('text')
  email: string;
  @Column('jsonb')
  contribution: IContribution;
}
