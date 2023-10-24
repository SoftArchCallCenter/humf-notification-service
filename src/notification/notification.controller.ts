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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notificationService.findOne(id);
  }

  @Get('user/:id')
  findByUser(@Param('id') id: string) {
    return this.notificationService.findByUser(id);
  }

  @Get('order/:id')
  findByOrder(@Param('id') id: string) {
    return this.notificationService.findByOrder(id);
  }

  @Get()
  getStatus(){
    return this.notificationService.getStatus();
  }

  @Delete('clear')
  remove(@Req() req: any) {
    return this.notificationService.remove(req);
  }
  

  @EventPattern('create_notification')
  handleTicketCreated(data: Record<string, unknown>) {
    console.log('Notification Service: ', data);
  }

}
