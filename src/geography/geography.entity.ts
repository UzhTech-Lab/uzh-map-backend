import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Community } from '../community/community.entity';
import { MarkerTypeEnum } from 'src/assets/enums/place.categories.enum';

@Entity()
export class Geography {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'jsonb' })
  coordinates: [number, number][];

  @Column({ type: 'enum', enum: MarkerTypeEnum })
  type: MarkerTypeEnum;

  @ManyToOne(() => Community, (community) => community.geography, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'community_id' })
  community: Community;
}
