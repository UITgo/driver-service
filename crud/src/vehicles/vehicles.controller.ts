import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

// ✅ Thêm prefix /v1 và thống nhất :driverId
@Controller('v1/drivers/:driverId/vehicles')
export class VehiclesController {
  constructor(private svc: VehiclesService) {}

  @Post()
  create(@Param('driverId') driverId: string, @Body() dto: CreateVehicleDto) {
    return this.svc.create(driverId, dto);
  }

  @Get()
  list(@Param('driverId') driverId: string) {
    return this.svc.list(driverId);
  }

  @Patch(':vehicleId')
  update(
    @Param('driverId') driverId: string,
    @Param('vehicleId') vehicleId: string,
    @Body() dto: UpdateVehicleDto,
  ) {
    return this.svc.update(driverId, vehicleId, dto);
  }

  @Delete(':vehicleId')
  remove(
    @Param('driverId') driverId: string,
    @Param('vehicleId') vehicleId: string,
  ) {
    return this.svc.remove(driverId, vehicleId);
  }
}
