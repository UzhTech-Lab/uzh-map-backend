import { Type } from 'class-transformer';
import {
  IsArray,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  ValidateNested,
} from 'class-validator';

class NationalityUpdateDTO {
  @IsOptional()
  @IsString()
  nationality_name: string;

  @IsOptional()
  @IsNumber()
  percent: number;
}

export class PopulationUpdateDTO {
  @IsOptional()
  @IsInt()
  @IsPositive()
  preschool_age: number;

  @IsOptional()
  @IsInt()
  @IsPositive()
  school_age: number;

  @IsOptional()
  @IsNumber()
  working_age_percent: number;

  @IsOptional()
  @IsInt()
  @IsPositive()
  retired: number;

  @IsOptional()
  @IsInt()
  @IsPositive()
  voters: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => NationalityUpdateDTO)
  nationalities: NationalityUpdateDTO[];
}
