import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsInt,
  IsString,
  IsArray,
  IsOptional,
  ArrayNotEmpty,
  IsPositive,
} from 'class-validator';

export class TransportUpdateDTO {
  @ApiPropertyOptional({ example: 2, description: 'Number of airports' })
  @IsOptional()
  @IsInt()
  @IsPositive()
  airports?: number;

  @ApiPropertyOptional({
    example: 3,
    description: 'Number of railway stations',
  })
  @IsOptional()
  @IsInt()
  @IsPositive()
  railwayStations?: number;

  @ApiPropertyOptional({ example: 10, description: 'Number of bus routes' })
  @IsOptional()
  @IsInt()
  @IsPositive()
  busRoutes?: number;

  @ApiPropertyOptional({
    example: ['Highway 1', 'Highway 2'],
    description: 'List of highways',
  })
  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  highways?: string[];

  @ApiPropertyOptional({
    example: 5,
    description: 'Number of border crossings',
  })
  @IsOptional()
  @IsInt()
  @IsPositive()
  borderCrossings?: number;

  @ApiPropertyOptional({ example: 20, description: 'Number of bike routes' })
  @IsOptional()
  @IsInt()
  @IsPositive()
  bikeRoutes?: number;
}
