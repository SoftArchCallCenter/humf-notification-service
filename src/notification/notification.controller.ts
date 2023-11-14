import { Body, Delete, Get, Param, Req, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload, EventPattern } from '@nestjs/microservices';
import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { GetByUserNotificationDto } from './dto/get-by-user-notification.dto';

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

  @Post('user')
  getNotiByUser(@Body() getNotiByUserDto: GetByUserNotificationDto) {
    return this.notificationService.getNotiByUser(getNotiByUserDto);
  }

  // @Get('order/:id')
  // findByOrder(@Param('id') id: string) {s
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
