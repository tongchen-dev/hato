import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class contribution_info {
  @PrimaryColumn('integer')
  id: number;
  @Column('text')
  name: string;
  @Column('bigint')
  count: number;
}
