import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Community } from '../community/community.entity';

@Entity()
export class Infrastructure {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  roads: boolean;

  @Column()
  railway: boolean;

  @Column()
  busses: boolean;

  @Column()
  stations: number;

  @OneToOne(() => Community, (community) => community.infrastructure, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'community_id' })
  community: Community;
}
