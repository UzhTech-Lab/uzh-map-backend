import {
  IsArray,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import { CreatePopulationDTO } from '../../population/dtos/population-create.dto';
import { EconomyCreateDTO } from '../../economy/dtos/economy-create.dto';
import { InfrastructureCreateDTO } from '../../infrastructure/dtos/infrastructure-create.dto';
import { AgricultureCreateDTO } from '../../argiculture/dtos/argiculture-create.dto';
import { EducationCreateDTO } from '../../education/dtos/education-create.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Religion } from 'src/religion/religion.entity';
import { Sport } from 'src/sport/sport.entity';
import { Transport } from 'src/transport/transport.entity';
import { Place } from 'src/place/place.entity';

export class FullCommunityCreateDTO {
  @ApiProperty({ example: 'Ужгородська громада' })
  @IsString()
  name: string;

  @ApiProperty({ example: '33868924' })
  @IsString()
  edrpou_code: string;

  @ApiProperty({ example: 'Закарпатська область' })
  @IsString()
  region: string;

  @ApiProperty({ example: 'Ужгородський район' })
  @IsString()
  district: string;

  @ApiProperty({ example: 5224 })
  @IsOptional()
  @IsNumber()
  population_amount?: number;

  @ApiProperty({ example: 1895 })
  @IsOptional()
  @IsString()
  established?: number;

  @ApiProperty({ example: 42.7 })
  @IsOptional()
  area_km2?: number;

  @ApiProperty({ example: 'Ужгород' })
  @IsString()
  center_settlement: string;

  @ApiProperty({ example: { latitude: 48.789, longitude: 123.23 } })
  @IsOptional()
  @IsString()
  center?: {
    latitude: number;
    longitude: number;
  };

  @ApiProperty({
    example:
      'Громада утворилась на базі лише одного населеного пункту – міста Ужгорода',
  })
  @IsString()
  history: string;

  @ApiProperty({
    example: ['Ужгород'],
  })
  @IsArray()
  settlements: string[];

  @ApiProperty({
    example: [
      {
        name: "Басейн 'Дельфін'",
        address: 'вул. Гагаріна, 22',
        latitude: 48.6175,
        longitude: 22.2895,
        type: 'sports',
        description: 'Міський плавальний басейн',
      },
    ],
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Place)
  keyPlaces?: Place[];

  @ApiProperty({ example: { lat: 48.62, lng: 22.3 } })
  @IsOptional()
  coordinates?: Array<{
    latitude: number;
    longitude: number;
  }>;

  @ApiProperty({
    example: 'Громада розташована на заході України в Закарпатті.',
  })
  @IsOptional()
  @IsString()
  geography_description?: string;

  @ApiProperty({ example: '88000' })
  @IsString()
  postal_index: string;

  @ApiProperty({ example: 'умr@rada-uzhgorod.gov.ua' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '(0312)-42-80-26' })
  @IsString()
  phone: string;

  @ApiProperty({ example: 'http://t-remeta.gov.ua' })
  @IsOptional()
  @IsString()
  website?: string;

  @IsOptional()
  @IsArray()
  photos?: string[];

  @ApiProperty({
    example: {
      amount: 5224,
      preschool_age: 384,
      school_age: 1111,
      working_age: 3082,
      retired: 647,
      voters: 123,
      nationalities: [],
    },
  })
  @ValidateNested()
  @Type(() => CreatePopulationDTO)
  population: CreatePopulationDTO;

  @ApiProperty({
    example: {
      budget: 236852.212,
      industry_amount: 2,
      trade_amount: 10,
      enterprises_amount: 5,
      nationalities: [{ nationality_name: 'українці', percent: 100 }],
    },
  })
  @ValidateNested()
  @Type(() => EconomyCreateDTO)
  economy: EconomyCreateDTO;

  @ApiProperty({
    example: {
      roads: true,
      railway: false,
      busses: true,
      stations: 0,
      markets: 45,
      shoppingCenters: 26,
      supermarkets: 56,
      restaurants: 78,
      cafes: 12,
      hotels: 246,
    },
  })
  @ValidateNested()
  @Type(() => InfrastructureCreateDTO)
  infrastructure: InfrastructureCreateDTO;

  @ApiProperty({
    type: [AgricultureCreateDTO],
  })
  @ValidateNested({ each: true })
  @Type(() => AgricultureCreateDTO)
  argiculture: AgricultureCreateDTO;

  @ApiProperty({
    type: [EducationCreateDTO],
  })
  @ValidateNested({ each: true })
  @Type(() => EducationCreateDTO)
  education: EducationCreateDTO;

  @IsOptional()
  @ValidateNested()
  @Type(() => Religion)
  religion?: Religion;

  @IsOptional()
  @ValidateNested()
  @Type(() => Sport)
  sport?: Sport;

  @IsOptional()
  @ValidateNested()
  @Type(() => Transport)
  transport?: Transport;
}
