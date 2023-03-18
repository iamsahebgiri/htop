import { Module } from '@nestjs/common';
import { StatsController } from './stats.controller';
import { StatsService } from './stats.service';
import { StatsGateway } from './stats.gateway';

@Module({
  imports: [],
  controllers: [StatsController],
  providers: [StatsService, StatsGateway],
})
export class StatsModule {}
