import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Community } from '../community/community.entity';

@Entity()
export class Population {
  @PrimaryGeneratedColumn()
  id: number;
  @OneToOne(() => Community, (community) => community.population, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'community_id' })
  community: Community;

  @Column()
  preschool_age: number;

  @Column()
  school_age: number;

  @Column()
  working_age: number;

  @Column()
  retired: number;

  @Column()
  voters: number;

  @Column('jsonb')
  nationalities: { nationality_name: string; percent: number }[];
}
