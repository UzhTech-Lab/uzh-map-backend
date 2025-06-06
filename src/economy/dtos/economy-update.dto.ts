import { IsNumber, IsOptional } from 'class-validator';

export class EconomyUpdateDTO {
  @IsOptional()
  @IsNumber()
  industry_amount: number;

  @IsOptional()
  @IsNumber()
  trade_amount: number;

  @IsOptional()
  @IsNumber()
  enterprises_amount: number;
}
