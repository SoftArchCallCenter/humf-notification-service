import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { RmqService } from './rmq/rmq.service';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const configService = app.get(ConfigService);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions('NOTIFICATION'));

  const port = configService.get('NOTIFICATION_SERVICE_PORT') || 5000;
  const host = configService.get('NOTIFICATION_SERVICE_HOST') || "127.0.0.1";

  await app.startAllMicroservices();
  await app.listen(port, host);
}
bootstrap();
