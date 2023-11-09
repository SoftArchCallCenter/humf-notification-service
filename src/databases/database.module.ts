import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        uri: `mongodb://${configService.get<string>('NOTIFICATION_SERVICE_MONGODB_SERVER')}:${configService.get<string>('NOTIFICATION_SERVICE_MONGODB_PORT')}/${configService.get<string>('NOTIFICATION_SERVICE_MONGODB_DATABASE')}`,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
