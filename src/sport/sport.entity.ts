import { Community } from 'src/community/community.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Sport {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  stadiums: number;

  @Column({ nullable: true })
  sportsCenters: number;

  @Column({ nullable: true })
  pools: number;

  @Column({ nullable: true })
  gyms: number;

  @Column({ nullable: true })
  sportsClubs: number;

  @OneToOne(() => Community, (community) => community.sport, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'community_id' })
  community: Community;
}
