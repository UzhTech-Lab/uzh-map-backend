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

export class FullCommunityCreateDTO {
  @IsString()
  name: string;

  @IsString()
  edrpou_code: string;

  @IsString()
  region: string;

  @IsString()
  district: string;

  @IsString()
  center_settlement: string;

  @IsString()
  postal_index: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsOptional()
  @IsString()
  website?: string;

  @IsOptional()
  @IsArray()
  photos?: string[];

  @IsString()
  history: string;

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
