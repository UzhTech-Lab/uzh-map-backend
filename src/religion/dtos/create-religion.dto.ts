import { ApiProperty } from '@nestjs/swagger';

export class ReligionCreateDTO {
  @ApiProperty({
    description: 'Number of orthodox churches',
    example: 10,
  })
  orthodox: number;

  @ApiProperty({
    description: 'Number of catholic churches',
    example: 5,
  })
  catholic: number;

  @ApiProperty({
    description: 'Number of protestant churches',
    example: 3,
  })
  protestant: number;

  @ApiProperty({
    description: 'Total number of churches',
    example: 18,
  })
  total: number;

  @ApiProperty({
    description: 'Number of monuments',
    example: 7,
  })
  monuments: number;

  @ApiProperty({
    description: 'Number of museums',
    example: 4,
  })
  museums: number;

  @ApiProperty({
    description: 'Community ID this religion data belongs to',
    example: 1,
  })
  community_id: number;
}
