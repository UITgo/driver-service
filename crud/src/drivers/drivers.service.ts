import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { ProfileStatus } from './dto/admin-query.dto';


@Injectable()
export class DriversService {
    constructor(private prisma: PrismaService) { }

    create(dto: CreateDriverDto) {
        return this.prisma.driver.create({ data: dto as any });
    }

    async findOne(id: string) {
        // BEFORE (sai vì findUnique + isDeleted)
        // AFTER (đúng)
        const d = await this.prisma.driver.findFirst({
            where: { id, isDeleted: false },
            include: { vehicles: true, workStatus: true },
        });
        if (!d) throw new NotFoundException('Driver not found');
        return d;

    }

    update(id: string, dto: UpdateDriverDto) {
        return this.prisma.driver.update({
            where: { id }, data: dto as any,
        });
    }

    // soft-delete
    async softDelete(id: string) {
        await this.prisma.driver.update({
            where: { id },
            data: { isDeleted: true, deletedAt: new Date() },
        });
        return { success: true };
    }

    adminList(status?: ProfileStatus) {
        return this.prisma.driver.findMany({
            where: {
                isDeleted: false,
                ...(status ? { statusProfile: status as any } : {}),
            },
            orderBy: { createdAt: 'desc' },
        });
    }

    setProfileStatus(id: string, status: ProfileStatus) {
        return this.prisma.driver.update({
            where: { id }, data: { statusProfile: status as any },
        });
    }
}
