import { IsString } from 'class-validator';

export class ArgicultureCreateDTO {
  @IsString()
  name: string;

  @IsString()
  details: string;
}
