import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive } from 'class-validator';

export class SportCreateDTO {
  @ApiProperty({ example: 3, description: 'Number of stadiums' })
  @IsInt()
  @IsPositive()
  stadiums: number;

  @ApiProperty({ example: 5, description: 'Number of sports centers' })
  @IsInt()
  @IsPositive()
  sportsCenters: number;

  @ApiProperty({ example: 2, description: 'Number of pools' })
  @IsInt()
  @IsPositive()
  pools: number;

  @ApiProperty({ example: 10, description: 'Number of gyms' })
  @IsInt()
  @IsPositive()
  gyms: number;

  @ApiProperty({ example: 4, description: 'Number of sports clubs' })
  @IsInt()
  @IsPositive()
  sportsClubs: number;
}
