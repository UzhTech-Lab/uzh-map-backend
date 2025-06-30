import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsInt } from 'class-validator';

export class AgricultureCreateDTO {
  @ApiProperty({ example: 123 })
  @IsInt()
  farmlandPercent?: number;

  @ApiProperty({ example: ['example object'] })
  @IsArray()
  mainCrops?: string[];

  @ApiProperty({ example: 123 })
  @IsInt()
  organicFarms?: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  community_id: number;
}
