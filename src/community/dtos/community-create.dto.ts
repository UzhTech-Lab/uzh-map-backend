import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsEmail, IsOptional, IsString } from 'class-validator';

export class CommunityCreateDTO {
  @ApiProperty({ example: 'Ужгородська громада' })
  @IsString()
  name: string;

  @ApiProperty({ example: '33868924' })
  @IsString()
  edrpou_code: string;

  @ApiProperty({ example: 'Закарпатська область' })
  @IsString()
  region: string;

  @ApiProperty({ example: 'Ужгородський район' })
  @IsString()
  district: string;

  @ApiProperty({ example: 'Ужгород' })
  @IsString()
  center_settlement: string;

  @ApiProperty({ example: '88000' })
  @IsString()
  postal_index: string;

  @ApiProperty({ example: 'умr@rada-uzhgorod.gov.ua' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '(0312)-42-80-26' })
  @IsString()
  phone: string;

  @ApiProperty({ example: 'http://t-remeta.gov.ua' })
  @IsOptional()
  @IsString()
  website?: string;

  @IsOptional()
  @IsArray()
  photos?: string[];

  @ApiProperty({
    example:
      'Громада утворилась на базі лише одного населеного пункту – міста Ужгорода',
  })
  @IsString()
  history: string;

  @ApiProperty({
    example: '["Ужгород"]',
  })
  @IsArray()
  settlements: string[];
}
