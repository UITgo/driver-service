import { Injectable } from '@nestjs/common';
@Injectable()
export class AppService {
  getHello() {
    return {
      name: 'driver-profile-service',
      endpoints: [
        'POST /drivers', 'GET /drivers/:id', 'PATCH /drivers/:id', 'DELETE /drivers/:id',
        'POST /drivers/:driverId/vehicles', 'GET /drivers/:driverId/vehicles',
        'PATCH /drivers/:driverId/vehicles/:vehicleId', 'DELETE /drivers/:driverId/vehicles/:vehicleId',
        'GET /admin/drivers?status=..', 'POST /admin/drivers/:id/approve', 'POST /admin/drivers/:id/reject',
        'PUT /drivers/:driverId/status', 'GET /drivers/:driverId/status'
      ]
    };
  }
}
