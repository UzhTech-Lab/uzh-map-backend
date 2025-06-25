import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { MarkerTypeEnum } from 'src/assets/enums/place.categories.enum';

export class GeographyUpdateDTO {
  @ApiProperty()
  @IsOptional()
  @IsString()
  coordinates: [number, number][];

  @ApiProperty({ example: { example: Object.values(MarkerTypeEnum) } })
  @IsOptional()
  @IsEnum(MarkerTypeEnum)
  category: MarkerTypeEnum;
}
