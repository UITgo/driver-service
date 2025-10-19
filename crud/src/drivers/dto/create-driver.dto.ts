import { IsOptional, IsString } from 'class-validator';

export class CreateDriverDto {
  @IsString() userId!: string;
  @IsString() fullName!: string;
  @IsOptional() @IsString() phone?: string;
}
