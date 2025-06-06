import { IsBoolean, IsInt, IsNumber } from 'class-validator';

export class InfrastructureCreateDTO {
  @IsBoolean()
  roads: boolean;

  @IsBoolean()
  railway: boolean;

  @IsBoolean()
  busses: boolean;

  @IsNumber()
  stations: number;

  @IsInt()
  communityId: number;
}
