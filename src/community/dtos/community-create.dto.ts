import { IsArray, IsEmail, IsOptional, IsString } from 'class-validator';

export class CommunityCreateDTO {
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
}
