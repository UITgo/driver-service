import { IsIn, IsInt, IsOptional, IsString, Min } from 'class-validator';

export const WorkStatusValues = ['ONLINE', 'OFFLINE'] as const;
export type WorkStatus = typeof WorkStatusValues[number];

export class UpdateStatusDto {
  @IsIn(WorkStatusValues)
  status!: WorkStatus;

  @IsOptional() @IsInt() @Min(0) capacity?: number;
  @IsOptional() @IsString() serviceArea?: string;
  @IsOptional() @IsString() vehicleType?: string;
}
