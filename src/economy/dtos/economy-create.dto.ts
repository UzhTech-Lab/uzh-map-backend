import { IsInt, IsNumber } from 'class-validator';

export class EconomyCreateDTO {
  @IsNumber()
  industry_amount: number;

  @IsNumber()
  trade_amount: number;

  @IsNumber()
  enterprises_amount: number;

  @IsInt()
  communityId: number;
}
