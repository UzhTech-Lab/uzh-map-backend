import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { MarkerTypeEnum } from 'src/assets/enums/place.categories.enum';

export class CreatePlaceDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;

  @IsEnum(MarkerTypeEnum)
  type: MarkerTypeEnum;

  @IsNumber()
  community_id: number;
}
