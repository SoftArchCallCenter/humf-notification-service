import { Delete, Get, Param, Req } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload, EventPattern } from '@nestjs/microservices';
import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification.dto';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get()
  findAll() {
    return this.notificationService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.notificationService.findByID(id);
  // }

  // @Get('user/:id')
  // findByUser(@Param('id') id: string) {
  //   return this.notificationService.findByUser(id);
  // }

  // @Get('order/:id')
  // findByOrder(@Param('id') id: string) {
  //   return this.notificationService.findByOrder(id);
  // }

  @Get('status/:order_id')
  getStatus(@Param('order_id') order_id: string) {
    return this.notificationService.getStatus(order_id);
  }

  // @Delete('clear')
  // remove(@Req() req: any) {
  //   return this.notificationService.remove(req);
  // }
  

  @EventPattern('create_notification')
  handleTicketCreated(data: CreateNotificationDto) {
    return this.notificationService.create(data as CreateNotificationDto);
  }

}
