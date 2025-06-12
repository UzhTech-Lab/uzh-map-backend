import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Community } from '../community/community.entity';

@Entity()
export class Agriculture {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  details: string;

  @ManyToOne(() => Community, (community) => community.argiculture_places, {
    onDelete: 'CASCADE',
  })
  community: Community;
}
