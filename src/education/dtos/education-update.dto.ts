import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Categories } from 'src/assets/enums/education-categories-enums';

export class EducationUpdateDTO {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsEnum(Categories)
  category: Categories;
}
