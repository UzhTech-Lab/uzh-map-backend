import { Categories } from 'src/assets/enums/geography-categories-enums';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Community } from '../community/community.entity';

@Entity()
export class Geography {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Community, (community) => community.geography, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'community_id' })
  community: Community;

  @Column()
  name: string;

  @Column({ type: 'enum', enum: Categories })
  category: Categories;
}
