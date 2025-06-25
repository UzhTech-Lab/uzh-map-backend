import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional } from 'class-validator';

export class InfrastructureUpdateDTO {
  @ApiProperty({ example: true })
  @IsOptional()
  @IsBoolean()
  roads: boolean;

  @ApiProperty({ example: true })
  @IsOptional()
  @IsBoolean()
  railway: boolean;

  @ApiProperty({ example: true })
  @IsOptional()
  @IsBoolean()
  busses: boolean;

  @ApiProperty({ example: 3 })
  @IsOptional()
  @IsNumber()
  stations: number;

  @ApiProperty({ example: 45 })
  @IsOptional()
  @IsNumber()
  markets: number;

  @ApiProperty({ example: 45 })
  @IsOptional()
  @IsNumber()
  shoppingCenters: number;

  @ApiProperty({ example: 45 })
  @IsOptional()
  @IsNumber()
  supermarkets: number;

  @ApiProperty({ example: 45 })
  @IsOptional()
  @IsNumber()
  restaurants: number;

  @ApiProperty({ example: 45 })
  @IsOptional()
  @IsNumber()
  cafes: number;

  @ApiProperty({ example: 45 })
  @IsOptional()
  @IsNumber()
  hotels: number;
}
