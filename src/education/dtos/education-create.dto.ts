import { IsEnum, IsString } from 'class-validator';
import { Categories } from 'src/assets/enums/education-categories-enums';

export class EducationCreateDTO {
  @IsString()
  name: string;

  @IsEnum(Categories)
  category: Categories;
}
