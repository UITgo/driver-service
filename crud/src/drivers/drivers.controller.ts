import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { AdminQueryDto } from './dto/admin-query.dto';

@Controller()
export class DriversController {
  constructor(private svc: DriversService) {}

  @Post('drivers') create(@Body() dto: CreateDriverDto) { return this.svc.create(dto); }
  @Get('drivers/:id') findOne(@Param('id') id: string) { return this.svc.findOne(id); }
  @Patch('drivers/:id') update(@Param('id') id: string, @Body() dto: UpdateDriverDto) { return this.svc.update(id, dto); }
  @Delete('drivers/:id') remove(@Param('id') id: string) { return this.svc.softDelete(id); }

  @Get('admin/drivers') adminList(@Query() q: AdminQueryDto) { return this.svc.adminList(q.status); }
  @Post('admin/drivers/:id/approve') approve(@Param('id') id: string) { return this.svc.setProfileStatus(id, 'APPROVED'); }
  @Post('admin/drivers/:id/reject')  reject (@Param('id') id: string) { return this.svc.setProfileStatus(id, 'REJECTED'); }
}
