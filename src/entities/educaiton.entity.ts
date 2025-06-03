import { Categories } from 'src/assets/enums/education-categories-enums';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Community } from './community.entity';

@Entity()
export class Education {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'enum', enum: Categories })
  category: Categories;

  @ManyToOne(() => Community, (community) => community.education_places)
  community: Community;
}
