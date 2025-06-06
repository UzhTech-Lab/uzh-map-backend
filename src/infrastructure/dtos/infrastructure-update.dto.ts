import { IsBoolean, IsNumber, IsOptional } from 'class-validator';

export class InfrastructureUpdateDTO {
  @IsOptional()
  @IsBoolean()
  roads: boolean;

  @IsOptional()
  @IsBoolean()
  railway: boolean;

  @IsOptional()
  @IsBoolean()
  busses: boolean;

  @IsOptional()
  @IsNumber()
  stations: number;
}
