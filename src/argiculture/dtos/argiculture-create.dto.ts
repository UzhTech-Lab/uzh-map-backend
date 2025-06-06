import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class AgricultureCreateDTO {
  @ApiProperty({ example: 'Угіддя' })
  @IsString()
  name: string;

  @ApiProperty({ example: '2304 га' })
  @IsString()
  details?: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  communityId: number;
}
