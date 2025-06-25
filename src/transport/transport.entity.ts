import { Community } from 'src/community/community.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Transport {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  airports: number;

  @Column()
  railwayStations: number;

  @Column()
  busRoutes: number;

  @Column('text', { array: true })
  highways: string[];

  @Column()
  borderCrossings: number;

  @Column() bikeRoutes: number;

  @OneToOne(() => Community, (community) => community.transport, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'community_id' })
  community: Community;
}
