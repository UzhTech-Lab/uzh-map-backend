import { MarkerTypeEnum } from 'src/assets/enums/place.categories.enum';
import { Community } from 'src/community/community.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Place {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column({ type: 'enum', enum: MarkerTypeEnum })
  type: MarkerTypeEnum;

  @ManyToOne(() => Community, (community) => community.keyPlaces, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'community_id' })
  community: Community;

  @Column()
  community_id: number;
}
