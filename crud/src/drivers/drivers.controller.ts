import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { AdminQueryDto } from './dto/admin-query.dto';

@Controller('v1')
export class DriversController {
  constructor(private svc: DriversService) { }

  // Onboarding & hồ sơ
  @Post('drivers')
  create(@Body() dto: CreateDriverDto) {
    return this.svc.create(dto);
  }

  @Get('drivers/:driverId')
  findOne(@Param('driverId') driverId: string) {
    return this.svc.findOne(driverId);
  }

  @Patch('drivers/:driverId')
  update(@Param('driverId') driverId: string, @Body() dto: UpdateDriverDto) {
    return this.svc.update(driverId, dto);
  }

  @Delete('drivers/:driverId')
  remove(@Param('driverId') driverId: string) {
    return this.svc.softDelete(driverId);
  }

  // Admin duyệt hồ sơ
  @Get('admin/drivers')
  adminList(@Query() q: AdminQueryDto) {
    return this.svc.adminList(q.status);
  }

  @Post('admin/drivers/:driverId/approve')
  approve(@Param('driverId') driverId: string) {
    return this.svc.setProfileStatus(driverId, 'APPROVED');
  }

  @Post('admin/drivers/:driverId/reject')
  reject(@Param('driverId') driverId: string) {
    return this.svc.setProfileStatus(driverId, 'REJECTED');
  }
}
