import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Community } from '../community/community.entity';

@Entity()
export class Agriculture {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  farmlandPercent: number;

  @Column('text', { array: true, nullable: true })
  mainCrops: string[];

  @Column({ nullable: true })
  organicFarms: number;

  @OneToOne(() => Community, (community) => community.argiculture, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'community_id' })
  community: Community;
}
