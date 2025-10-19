import { IsIn, IsOptional } from 'class-validator';

// runtime enum cho class-validator
export const ProfileStatusValues = ['PENDING', 'APPROVED', 'REJECTED'] as const;
export type ProfileStatus = typeof ProfileStatusValues[number];

export class AdminQueryDto {
  @IsOptional() @IsIn(ProfileStatusValues)
  status?: ProfileStatus;
}
