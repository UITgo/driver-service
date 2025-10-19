import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

@Injectable()
export class VehiclesService {
  constructor(private prisma: PrismaService) {}

  async assertDriver(driverId: string) {
    const d = await this.prisma.driver.findFirst({ where: { id: driverId, isDeleted: false } });
    if (!d) throw new NotFoundException('Driver not found');
  }

  async create(driverId: string, dto: CreateVehicleDto) {
    await this.assertDriver(driverId);
    return this.prisma.vehicle.create({ data: { ...dto, driverId } });
  }

  list(driverId: string) {
    return this.prisma.vehicle.findMany({ where: { driverId } });
  }

  async update(driverId: string, vehicleId: string, dto: UpdateVehicleDto) {
    await this.assertDriver(driverId);
    return this.prisma.vehicle.update({ where: { id: vehicleId }, data: dto as any });
  }

  remove(_driverId: string, vehicleId: string) {
    return this.prisma.vehicle.delete({ where: { id: vehicleId } });
  }
}
