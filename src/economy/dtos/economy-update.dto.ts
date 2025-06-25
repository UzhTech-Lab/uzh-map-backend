import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsOptional } from 'class-validator';

export class EconomyUpdateDTO {
  @IsOptional()
  @ApiProperty({ example: 2316.9 })
  @IsNumber()
  budget?: number;

  @IsOptional()
  @ApiProperty({ example: 456 })
  @IsNumber()
  industry_amount?: number;

  @IsOptional()
  @ApiProperty({ example: 78 })
  @IsNumber()
  trade_amount?: number;

  @IsOptional()
  @ApiProperty({ example: 63 })
  @IsNumber()
  enterprises_amount?: number;

  @ApiProperty({ example: [] })
  @IsArray()
  industries?: string[];

  @ApiProperty({ example: 156 })
  @IsNumber()
  companies?: number;

  @ApiProperty({ example: 780 })
  @IsNumber()
  unemployment?: number;

  @ApiProperty({ example: [] })
  @IsArray()
  majorEmployers?: string[];
}
