import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { MarkerTypeEnum } from 'src/assets/enums/place.categories.enum';

export class GeographyCreateDTO {
  @ApiProperty()
  @IsString()
  coordinates: [number, number][];

  @ApiProperty({ example: { example: Object.values(MarkerTypeEnum) } })
  @IsEnum(MarkerTypeEnum)
  category: MarkerTypeEnum;
}
