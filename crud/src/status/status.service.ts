import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateStatusDto } from './dto/update-status.dto';

@Injectable()
export class StatusService {
  constructor(private prisma: PrismaService) {}

  upsert(driverId: string, dto: UpdateStatusDto) {
    return this.prisma.driverWorkStatus.upsert({
      where: { driverId },
      update: { ...dto as any },
      create: { driverId, ...dto as any },
    });
  }

  get(driverId: string) {
    return this.prisma.driverWorkStatus.findUnique({ where: { driverId } });
  }
}
