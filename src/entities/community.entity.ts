import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Geography } from './geography.entity';
import { Economy } from './economy.entity';
import { Infrastructure } from './infrastructure.enity';
import { Argiculture } from './argiculture.entity';
import { Education } from './educaiton.entity';
import { Population } from './population.entity';

@Entity()
export class Community {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  edrpou_code: string;

  @Column()
  region: string;

  @Column()
  district: string;

  @Column()
  center_settlement: string;

  @Column()
  postal_index: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column({ nullable: true })
  website?: string;

  @Column('text', { array: true })
  photos: string[];

  @Column()
  history: string;

  @Column('text', { array: true })
  settlements: string[];

  @OneToOne(() => Geography, (geography) => geography.community)
  geography: Geography;

  @OneToOne(() => Population, (population) => population.community)
  population: Population;

  @OneToOne(() => Economy, (economy) => economy.community)
  economy: Economy;

  @OneToOne(() => Infrastructure, (infrastructure) => infrastructure.community)
  infrastructure: Infrastructure;

  @OneToMany(() => Argiculture, (argiculture) => argiculture.community)
  argiculture_places: Argiculture[];

  @OneToMany(() => Education, (education) => education.community)
  education_places: Education[];
}
