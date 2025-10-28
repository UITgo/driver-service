import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { StatusService } from './status.service';
import { UpdateStatusDto } from './dto/update-status.dto';

@Controller('v1/drivers/:driverId/status')
export class StatusController {
  constructor(private svc: StatusService) {}

  @Put()
  update(@Param('driverId') driverId: string, @Body() dto: UpdateStatusDto) {
    return this.svc.upsert(driverId, dto);
  }

  @Get()
  get(@Param('driverId') driverId: string) {
    return this.svc.get(driverId);
  }
}
