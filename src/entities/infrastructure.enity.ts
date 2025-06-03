import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Community } from './community.entity';

@Entity()
export class Infrastructure {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  roads: boolean;

  @Column()
  railway: boolean;

  @Column()
  buses: boolean;

  @Column()
  stations: number;

  @OneToOne(() => Community, (community) => community.infrastructure)
  @JoinColumn({ name: 'community_id' })
  community: Community;
}
