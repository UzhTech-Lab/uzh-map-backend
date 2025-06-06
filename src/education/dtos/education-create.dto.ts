import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsInt, IsString } from 'class-validator';
import { Categories } from 'src/assets/enums/education-categories-enums';

export class EducationCreateDTO {
  @ApiProperty({ example: 'Ліцей №8' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'школа' })
  @IsEnum(Categories)
  category: Categories;

  @IsInt()
  communityId: number;
}
