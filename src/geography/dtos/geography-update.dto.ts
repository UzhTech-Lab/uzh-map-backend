import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Categories } from 'src/assets/enums/geography-categories-enums';

export class GeographyUpdateDTO {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsEnum(Categories)
  category: Categories;
}
