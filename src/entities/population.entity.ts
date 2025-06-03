import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Community } from './community.entity';

@Entity()
export class Population {
  @PrimaryGeneratedColumn()
  id: number;
  @OneToOne(() => Community, (community) => community.population)
  @JoinColumn({ name: 'community_id' })
  community: Community;

  @Column()
  preschool_age: number;

  @Column()
  school_age: number;

  @Column()
  working_age_percent: number;

  @Column()
  retired: number;

  @Column()
  voters: number;

  @Column('jsonb')
  nationalities: { nationality_name: string; percent: number }[];
}
