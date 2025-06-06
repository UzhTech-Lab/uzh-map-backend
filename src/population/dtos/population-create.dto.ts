import {
  IsNumber,
  IsArray,
  ValidateNested,
  IsPositive,
  IsInt,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';

class NationalityDTO {
  @IsString()
  nationality_name: string;

  @IsNumber()
  percent: number;
}

export class CreatePopulationDTO {
  @IsInt()
  @IsPositive()
  preschool_age: number;

  @IsInt()
  @IsPositive()
  school_age: number;

  @IsNumber()
  working_age: number;

  @IsInt()
  @IsPositive()
  retired: number;

  @IsInt()
  @IsPositive()
  voters: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => NationalityDTO)
  nationalities: NationalityDTO[];

  @IsInt()
  communityId: number;
}
