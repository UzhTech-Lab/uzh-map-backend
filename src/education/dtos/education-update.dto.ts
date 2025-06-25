import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsObject, IsOptional } from 'class-validator';

export class EducationUpdateDTO {
  @IsOptional()
  @ApiProperty({ example: { elementary: 5, secondary: 32, total: 56 } })
  @IsObject()
  schools: { elementary: number; secondary: number; total: number };

  @IsOptional()
  @ApiProperty({
    example: {
      regional: 12,
      city: 32,
      specialized: 45,
      total: 235,
    },
  })
  @IsOptional()
  @IsObject()
  hospitals: {
    regional: number;
    city: number;
    specialized: number;
    total: number;
  };

  @ApiProperty({ example: 456 })
  @IsOptional()
  @IsInt()
  universities: number;

  @ApiProperty({ example: 20 })
  @IsOptional()
  @IsInt()
  libraries: number;

  @ApiProperty({ example: 5 })
  @IsOptional()
  @IsInt()
  theaters: number;
}
