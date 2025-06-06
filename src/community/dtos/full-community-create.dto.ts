import {
  IsString,
  IsEmail,
  IsOptional,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

import { GeographyCreateDTO } from '../../geography/dtos/geography-create.dto';
import { CreatePopulationDTO } from '../../population/dtos/population-create.dto';
import { EconomyCreateDTO } from '../../economy/dtos/economy-create.dto';
import { InfrastructureCreateDTO } from '../../infrastructure/dtos/infrastructure-create.dto';
import { AgricultureCreateDTO } from '../../argiculture/dtos/argiculture-create.dto';
import { EducationCreateDTO } from '../../education/dtos/education-create.dto';
import { ApiProperty } from '@nestjs/swagger';

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

  @ApiProperty({ example: 'Ужгород' })
  @IsString()
  center_settlement: string;

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
    example:
      'Громада утворилась на базі лише одного населеного пункту – міста Ужгорода',
  })
  @IsString()
  history: string;

  @ApiProperty({
    example: '["Ужгород"]',
  })
  @IsArray()
  settlements: string[];

  @ValidateNested()
  @Type(() => GeographyCreateDTO)
  geography: GeographyCreateDTO[];

  @ValidateNested()
  @Type(() => CreatePopulationDTO)
  population: CreatePopulationDTO;

  @ValidateNested()
  @Type(() => EconomyCreateDTO)
  economy: EconomyCreateDTO;

  @ValidateNested()
  @Type(() => InfrastructureCreateDTO)
  infrastructure: InfrastructureCreateDTO;

  @ValidateNested({ each: true })
  @Type(() => AgricultureCreateDTO)
  argiculture_places: AgricultureCreateDTO[];

  @ValidateNested({ each: true })
  @Type(() => EducationCreateDTO)
  education_places: EducationCreateDTO[];
}
