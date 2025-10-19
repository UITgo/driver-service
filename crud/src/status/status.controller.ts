import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { StatusService } from './status.service';
import { UpdateStatusDto } from './dto/update-status.dto';

@Controller('drivers/:driverId/status')
export class StatusController {
  constructor(private svc: StatusService) {}

  @Put() update(@Param('driverId') id: string, @Body() dto: UpdateStatusDto) { return this.svc.upsert(id, dto); }
  @Get() get(@Param('driverId') id: string) { return this.svc.get(id); }
}
