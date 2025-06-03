import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Community } from './community.entity';

@Entity()
export class Economy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  industry_amount: number;

  @Column()
  trade_amount: number;

  @Column()
  enterprises_amount: number;

  @OneToOne(() => Community, (community) => community.economy)
  @JoinColumn({ name: 'community_id' })
  community: Community;
}
