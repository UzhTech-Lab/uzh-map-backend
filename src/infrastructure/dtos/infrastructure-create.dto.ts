import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber } from 'class-validator';

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

  @ApiProperty({ example: 45 })
  @IsNumber()
  markets: number;

  @ApiProperty({ example: 45 })
  @IsNumber()
  shoppingCenters: number;

  @ApiProperty({ example: 45 })
  @IsNumber()
  supermarkets: number;

  @ApiProperty({ example: 45 })
  @IsNumber()
  restaurants: number;

  @ApiProperty({ example: 45 })
  @IsNumber()
  cafes: number;

  @ApiProperty({ example: 45 })
  @IsNumber()
  hotels: number;
}
