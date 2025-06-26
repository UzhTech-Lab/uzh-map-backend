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
import { Religion } from 'src/religion/religion.entity';
import { Place } from 'src/place/place.entity';
import { Transport } from 'src/transport/transport.entity';
import { Sport } from 'src/sport/sport.entity';

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
  population_amount: number;

  @Column()
  established: number;

  @Column('float')
  area_km2: number;

  @Column()
  district: string;

  @Column()
  center_settlement: string;

  @Column('json')
  center: {
    latitude: number;
    longitude: number;
  };

  @OneToMany(() => Place, (place) => place.community, {
    cascade: true,
  })
  keyPlaces: Place[];

  @Column('json')
  coordinates: Array<{
    latitude: number;
    longitude: number;
  }>;

  @Column()
  geography_description: string;

  @Column()
  postal_index: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column({ nullable: true })
  website?: string;

  @Column('text', { array: true, nullable: true })
  photos?: string[];

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

  @OneToOne(() => Agriculture, (argiculture) => argiculture.community)
  argiculture: Agriculture;

  @OneToOne(() => Education, (education) => education.community)
  education: Education;

  @OneToOne(() => Religion, (religion) => religion.community)
  religion: Religion;

  @OneToOne(() => Sport, (sport) => sport.community)
  sport: Sport;

  @OneToOne(() => Transport, (transport) => transport.community)
  transport: Transport;
}
