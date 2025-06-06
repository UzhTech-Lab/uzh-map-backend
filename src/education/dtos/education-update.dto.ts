import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Categories } from 'src/assets/enums/education-categories-enums';

export class EducationUpdateDTO {
  @IsOptional()
  @ApiProperty({ example: 'Ліцей №8' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'школа' })
  @IsOptional()
  @IsEnum(Categories)
  category: Categories;
}
