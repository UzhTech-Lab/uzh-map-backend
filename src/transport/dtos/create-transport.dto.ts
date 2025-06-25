import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsString,
  IsArray,
  ArrayNotEmpty,
  IsPositive,
} from 'class-validator';

export class TransportCreateDTO {
  @ApiProperty({ example: 2, description: 'Number of airports' })
  @IsInt()
  @IsPositive()
  airports: number;

  @ApiProperty({ example: 3, description: 'Number of railway stations' })
  @IsInt()
  @IsPositive()
  railwayStations: number;

  @ApiProperty({ example: 10, description: 'Number of bus routes' })
  @IsInt()
  @IsPositive()
  busRoutes: number;

  @ApiProperty({
    example: ['Highway 1', 'Highway 2'],
    description: 'List of highways',
  })
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  highways: string[];

  @ApiProperty({ example: 5, description: 'Number of border crossings' })
  @IsInt()
  @IsPositive()
  borderCrossings: number;

  @ApiProperty({ example: 20, description: 'Number of bike routes' })
  @IsInt()
  @IsPositive()
  bikeRoutes: number;

  @ApiProperty({
    example: 1,
    description: 'Community ID this transport data belongs to',
  })
  @IsInt()
  @IsPositive()
  community_id: number;
}
