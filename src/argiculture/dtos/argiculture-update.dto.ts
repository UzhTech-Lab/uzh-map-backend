import { IsOptional, IsString } from 'class-validator';

export class AgricultureUpdateDTO {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  details: string;
}
