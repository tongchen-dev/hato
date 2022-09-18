import { Event, Pic } from '../interface/public';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Contribution {
  @PrimaryColumn('uuid')
  id: string;
  @Column('text')
  title: string;
  @Column('json')
  payload: Event | Pic;
  @Column('text')
  type: 'pic' | 'event';
  @Column('jsonb')
  contributor: {
    name: string;
    email: string;
  }[];
}
