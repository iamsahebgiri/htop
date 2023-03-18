import { OnModuleInit } from '@nestjs/common';
import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { StatsService } from './stats.service';

@WebSocketGateway({
  cors: {
    origin: ['http://localhost:3001'],
    credentials: true,
  },
})
export class StatsGateway implements OnModuleInit {
  @WebSocketServer() server: Server;

  constructor(private readonly statsService: StatsService) {}

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log(socket.id, 'connected');

      socket.on('disconnect', function (idk) {
        console.log('client disconnected');
      });
    });

    setInterval(async () => {
      const stats = await this.statsService.dynamicInfo();
      this.server.emit('stats', stats);
    }, 2500);
  }
}
