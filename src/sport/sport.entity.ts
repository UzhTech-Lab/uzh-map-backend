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

  @Column()
  stadiums: number;

  @Column()
  sportsCenters: number;

  @Column()
  pools: number;

  @Column()
  gyms: number;

  @Column()
  sportsClubs: number;

  @OneToOne(() => Community, (community) => community.sport, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'community_id' })
  community: Community;
}
