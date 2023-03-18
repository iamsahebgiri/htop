import { Injectable } from '@nestjs/common';
const si = require('systeminformation');

@Injectable()
export class StatsService {
  async staticInfo() {
    const info = await si.get({
      cpu: 'manufacturer brand speed cores cache',
      osInfo: 'platform distro release codename kernel arch hostname',
      system: 'model manufacturer',
    });
    return info;
  }

  async dynamicInfo() {
    const info = await si.get({
      currentLoad: '*',
      mem: '*',
      time: '*',
      fsStats: '*',
      // processes: '*',
    });
    return info;
  }
}
