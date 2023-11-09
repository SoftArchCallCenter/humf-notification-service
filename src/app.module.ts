import { Module } from '@nestjs/common';
import { NotificationModule } from './notification/notification.module';
import { DatabaseModule } from './databases/database.module'
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi'
import { RmqModule } from './rmq/rmq.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        NOTIFICATION_SERVICE_MONGODB_SERVER: Joi.string().required(),
        NOTIFICATION_SERVICE_MONGODB_PORT: Joi.string().required(),
        NOTIFICATION_SERVICE_MONGODB_DATABASE: Joi.string().required(),
        NOTIFICATION_SERVICE_RABBIT_MQ_URI: Joi.string().required(),
        NOTIFICATION_SERVICE_RABBIT_MQ_NOTIFICATION_QUEUE: Joi.string().required(),
      }),
      envFilePath: './.env',
    }),
    DatabaseModule,
    RmqModule,
    NotificationModule
  ],
})
export class AppModule {}
