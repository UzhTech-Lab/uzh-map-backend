import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Community } from '../community/community.entity';

@Entity()
export class Education {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('jsonb', { nullable: true })
  schools: { elementary: number; secondary: number; total: number };

  @Column('jsonb', { nullable: true })
  hospitals: {
    regional: number;
    city: number;
    specialized: number;
    total: number;
  };

  @Column({ nullable: true })
  universities: number;

  @Column({ nullable: true })
  libraries: number;

  @Column({ nullable: true })
  theaters: number;

  @OneToOne(() => Community, (community) => community.education, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'community_id' })
  community: Community;
}
