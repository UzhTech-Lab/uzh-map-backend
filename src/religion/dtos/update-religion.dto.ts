import { ApiPropertyOptional } from '@nestjs/swagger';

export class ReligionUpdateDTO {
  @ApiPropertyOptional({
    description: 'Number of orthodox churches',
    example: 10,
  })
  orthodox?: number;

  @ApiPropertyOptional({
    description: 'Number of catholic churches',
    example: 5,
  })
  catholic?: number;

  @ApiPropertyOptional({
    description: 'Number of protestant churches',
    example: 3,
  })
  protestant?: number;

  @ApiPropertyOptional({
    description: 'Total number of churches',
    example: 18,
  })
  total?: number;

  @ApiPropertyOptional({
    description: 'Number of monuments',
    example: 7,
  })
  monuments?: number;

  @ApiPropertyOptional({
    description: 'Number of museums',
    example: 4,
  })
  museums?: number;
}
