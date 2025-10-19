import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateVehicleDto {
  @IsOptional() @IsString() plateNo?: string;
  @IsOptional() @IsString() type?: string;
  @IsOptional() @IsString() brand?: string;
  @IsOptional() @IsString() color?: string;
  @IsOptional() @IsBoolean() active?: boolean;
}
