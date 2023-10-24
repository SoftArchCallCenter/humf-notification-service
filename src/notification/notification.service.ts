import { Injectable, Logger } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { Notification } from './entities/notification.entity';

@Injectable()
export class NotificationService {
  protected readonly logger = new Logger(NotificationService.name);

  constructor(
    @InjectModel(Notification.name) notiModel: Model<Notification>,
    @InjectConnection() connection: Connection,
  ) {}

  create(createNotificationDto: CreateNotificationDto) {
    return 'This action adds a new notification';
  }

  findAll() {
    return `This action returns all notification`;
  }

  findOne(id: string) {
    return `This action returns a #${id} notification`;
  }

  findByUser(id: string) {
    return `This action returns a #${id} notification`;
  }

  findByOrder(id: string) {
    return `This action returns a #${id} notification`;
  }

  remove(req: any) {
    return `This action removes a #${req} notification`;
  }

  getStatus() {
    return `This action returns status of notification`;
  }

}
