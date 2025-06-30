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

  @Column({ nullable: true })
  airports: number;

  @Column({ nullable: true })
  railwayStations: number;

  @Column({ nullable: true })
  busRoutes: number;

  @Column('text', { array: true, nullable: true })
  highways: string[];

  @Column({ nullable: true })
  borderCrossings: number;

  @Column({ nullable: true }) bikeRoutes: number;

  @OneToOne(() => Community, (community) => community.transport, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'community_id' })
  community: Community;
}
