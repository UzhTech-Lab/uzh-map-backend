import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber } from 'class-validator';

export class EconomyCreateDTO {
  @ApiProperty({ example: 2316.9 })
  @IsNumber()
  budget?: number;

  @ApiProperty({ example: 456 })
  @IsNumber()
  industry_amount?: number;

  @ApiProperty({ example: 78 })
  @IsNumber()
  trade_amount?: number;

  @ApiProperty({ example: 63 })
  @IsNumber()
  enterprises_amount?: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  communityId: number;
}
