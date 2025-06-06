import { IsEnum, IsInt, IsString } from 'class-validator';
import { Categories } from 'src/assets/enums/geography-categories-enums';

export class GeographyCreateDTO {
  @IsString()
  name: string;

  @IsEnum(Categories)
  category: Categories;

  @IsInt()
  communityId: number;
}
