import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Place } from 'src/place/place.entity';
import { Type } from 'class-transformer';

export class CommunityCreateDTO {
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

  @ApiProperty({ example: 'Ужгород' })
  @IsString()
  center_settlement: string;

  @ApiProperty({ example: '88000' })
  @IsString()
  postal_index: string;

  @ApiProperty({ example: 'umr@rada-uzhgorod.gov.ua' })
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
  @IsString({ each: true })
  photos?: string[];

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
  @IsString({ each: true })
  settlements: string[];

  @ApiProperty({ example: 560311215 })
  @IsOptional()
  @IsNumber()
  population_amount?: number;

  @ApiProperty({ example: 1895 })
  @IsOptional()
  @IsNumber()
  established?: number;

  @ApiProperty({ example: 42.7 })
  @IsOptional()
  @IsNumber()
  area_km2?: number;

  @ApiProperty({ example: { latitude: 48.62, longitude: 22.3 } })
  @IsOptional()
  center?: {
    latitude: number;
    longitude: number;
  };

  @ApiProperty({ example: [{ name: 'Площа Шандора Петефі' }] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Place)
  keyPlaces?: Place[];

  @ApiProperty({
    example: [
      { latitude: 48.62, longitude: 22.3 },
      { latitude: 48.63, longitude: 22.31 },
    ],
  })
  @IsOptional()
  @IsArray()
  coordinates?: Array<{
    latitude: number;
    longitude: number;
  }>;

  @ApiProperty({ example: 'Знаходиться вздовж річки Уж' })
  @IsOptional()
  @IsString()
  geography_description?: string;
}
