import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsInt, IsOptional } from 'class-validator';

export class AgricultureUpdateDTO {
  @IsOptional()
  @ApiProperty({ example: 123 })
  @IsInt()
  farmlandPercent?: number;

  @IsOptional()
  @ApiProperty({ example: ['example object'] })
  @IsArray()
  mainCrops?: string[];

  @ApiProperty({ example: 123 })
  @IsOptional()
  @IsInt()
  organicFarms?: number;
}
