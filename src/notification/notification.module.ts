import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationSchema } from './entities/notification.entity';
import { NotificationRepository } from './notification.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Notification',
      schema: NotificationSchema
    }])
  ],
  controllers: [NotificationController],
  providers: [
    NotificationService,
    NotificationRepository
  ],
})
export class NotificationModule {}
