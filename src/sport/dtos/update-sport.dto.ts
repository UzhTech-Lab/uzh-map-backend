import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsPositive, IsOptional } from 'class-validator';

export class SportUpdateDTO {
  @ApiPropertyOptional({ example: 3, description: 'Number of stadiums' })
  @IsOptional()
  @IsInt()
  @IsPositive()
  stadiums?: number;

  @ApiPropertyOptional({ example: 5, description: 'Number of sports centers' })
  @IsOptional()
  @IsInt()
  @IsPositive()
  sportsCenters?: number;

  @ApiPropertyOptional({ example: 2, description: 'Number of pools' })
  @IsOptional()
  @IsInt()
  @IsPositive()
  pools?: number;

  @ApiPropertyOptional({ example: 10, description: 'Number of gyms' })
  @IsOptional()
  @IsInt()
  @IsPositive()
  gyms?: number;

  @ApiPropertyOptional({ example: 4, description: 'Number of sports clubs' })
  @IsOptional()
  @IsInt()
  @IsPositive()
  sportsClubs?: number;
}
