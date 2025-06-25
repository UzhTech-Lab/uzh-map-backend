import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber } from 'class-validator';

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

  @ApiProperty({ example: [] })
  @IsArray()
  industries?: string[];

  @ApiProperty({ example: 78 })
  @IsNumber()
  companies?: number;

  @ApiProperty({ example: 78 })
  @IsNumber()
  unemployment?: number;

  @ApiProperty({ example: [] })
  @IsArray()
  majorEmployers?: string[];
}
