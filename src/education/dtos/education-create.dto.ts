import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsObject } from 'class-validator';

export class EducationCreateDTO {
  @ApiProperty({ example: { elementary: 5, secondary: 32, total: 56 } })
  @IsObject()
  schools: { elementary: number; secondary: number; total: number };

  @ApiProperty({
    example: {
      regional: 12,
      city: 32,
      specialized: 45,
      total: 235,
    },
  })
  @IsObject()
  hospitals: {
    regional: number;
    city: number;
    specialized: number;
    total: number;
  };

  @IsInt()
  universities: number;

  @IsInt()
  libraries: number;

  @IsInt()
  theaters: number;
}
