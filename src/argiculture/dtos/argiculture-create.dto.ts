import { IsInt, IsString } from 'class-validator';

export class AgricultureCreateDTO {
  @IsString()
  name: string;

  @IsString()
  details?: string;

  @IsInt()
  communityId: number;
}
