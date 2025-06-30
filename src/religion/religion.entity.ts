import { Community } from 'src/community/community.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Religion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('jsonb', { nullable: true })
  churches: {
    orthodox: number;
    catholic: number;
    protestant: number;
    total: number;
  };
  @Column({ nullable: true })
  monuments: number;

  @Column({ nullable: true })
  museums: number;

  @OneToOne(() => Community, (community) => community.religion, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'community_id' })
  community: Community;
}
