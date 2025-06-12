import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Geography } from '../geography/geography.entity';
import { Economy } from '../economy/economy.entity';
import { Infrastructure } from '../infrastructure/infrastructure.entity';
import { Agriculture } from '../argiculture/agriculture.entity';
import { Education } from '../education/education.entity';
import { Population } from '../population/population.entity';

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

  @OneToMany(() => Geography, (geography) => geography.community)
  geography: Geography;

  @OneToOne(() => Population, (population) => population.community)
  population: Population;

  @OneToOne(() => Economy, (economy) => economy.community)
  economy: Economy;

  @OneToOne(() => Infrastructure, (infrastructure) => infrastructure.community)
  infrastructure: Infrastructure;

  @OneToMany(() => Agriculture, (argiculture) => argiculture.community)
  argiculture_places: Agriculture[];

  @OneToMany(() => Education, (education) => education.community)
  education_places: Education[];
}
