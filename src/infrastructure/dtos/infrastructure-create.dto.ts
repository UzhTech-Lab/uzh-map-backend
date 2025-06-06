import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsNumber } from 'class-validator';

export class InfrastructureCreateDTO {
  @ApiProperty({ example: true })
  @IsBoolean()
  roads: boolean;

  @ApiProperty({ example: true })
  @IsBoolean()
  railway: boolean;

  @ApiProperty({ example: true })
  @IsBoolean()
  busses: boolean;

  @ApiProperty({ example: 5 })
  @IsNumber()
  stations: number;

  @IsInt()
  communityId: number;
}
