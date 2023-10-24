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
        MONGODB_URI: Joi.string().required(),
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_QUEUE: Joi.string().required(),
      }),
      envFilePath: './.env',
    }),
    DatabaseModule,
    RmqModule,
    NotificationModule
  ],
})
export class AppModule {}
