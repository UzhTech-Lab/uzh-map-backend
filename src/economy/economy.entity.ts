import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Community } from '../community/community.entity';

@Entity()
export class Economy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { array: true })
  industries: string[];

  @Column({ nullable: true })
  companies: number;

  @Column({ nullable: true })
  unemployment: number;

  @Column('text', { array: true, nullable: true })
  majorEmployers: string[];

  @Column('float', { nullable: true })
  budget: number;

  @Column('float', { nullable: true })
  industry_amount: number;

  @Column('float', { nullable: true })
  trade_amount: number;

  @Column('float', { nullable: true })
  enterprises_amount: number;

  @OneToOne(() => Community, (community) => community.economy, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'community_id' })
  community: Community;
}
