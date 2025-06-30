import { IsArray, IsNumber, IsObject, IsString } from 'class-validator';
import { Place } from 'src/place/place.entity';

export class GetCommunityDTO {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  edrpou_code: string;

  @IsString()
  region: string;

  @IsNumber()
  population_amount: number;

  @IsNumber()
  established: number;

  @IsNumber()
  area_km2: number;

  @IsString()
  district: string;

  @IsString()
  center_settlement: string;

  @IsObject()
  center: {
    latitude: number;
    longitude: number;
  };

  @IsArray()
  settlements: string[];

  @IsArray()
  keyPlaces: Place[];
}
