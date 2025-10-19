import { IsOptional, IsString } from 'class-validator';

export class CreateVehicleDto {
  @IsString() plateNo!: string;
  @IsString() type!: string;
  @IsOptional() @IsString() brand?: string;
  @IsOptional() @IsString() color?: string;
}
