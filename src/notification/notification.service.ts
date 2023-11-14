import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { GetByUserNotificationDto } from './dto/get-by-user-notification.dto';
import { NotificationRepository } from './notification.repository';

@Injectable()
export class NotificationService {
  constructor(
    private readonly notificationRepository: NotificationRepository,
  ) {}

  create(createNotificationDto: CreateNotificationDto) {
    return this.notificationRepository.create(createNotificationDto);
  }

  findAll() {
    return this.notificationRepository.find({});
  }

  findByID(id: string) {
    return this.notificationRepository.findOne({_id: id})
  }

  findByUser(id: string) {
    return this.notificationRepository.find({user_id: id})
  }

  findByOrder(id: string) {
    return this.notificationRepository.find({order_id: id})
  }

  remove(req: any) {
    return `This action removes a #${req} notification`;
  }

  getStatus(order_id) {
    return this.notificationRepository.getStatus(order_id);
  }

  getNotiByUser(getNotiByUserDto: GetByUserNotificationDto) {
    return this.notificationRepository.getNotiByUser(getNotiByUserDto);
  }

}
