import { NestFactory } from '@nestjs/core';
import { StatsModule } from './stats/stats.module';

async function bootstrap() {
  const app = await NestFactory.create(StatsModule);
  // app.use((req, res, next) => {
  //   res.header('Access-Control-Allow-Origin', '*');
  //   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  //   res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
  //   next();
  // });

  app.enableCors();

  // app.enableCors({
  //   allowedHeaders: '*',
  //   origin: '*',
  // });
  await app.listen(3000);
}
bootstrap();
