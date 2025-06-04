import { IsOptional, IsString } from 'class-validator';

export class ArgicultureUpdateDTO {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  details: string;
}
