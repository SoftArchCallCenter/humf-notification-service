import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RmqContext, RmqOptions, Transport } from '@nestjs/microservices';

@Injectable()
export class RmqService {
  constructor(private readonly configService: ConfigService) {}

  getOptions(queue: string, noAck = true): RmqOptions {
    return {
      transport: Transport.RMQ,
      options: {
        urls: [this.configService.get<string>('NOTIFICATION_SERVICE_RABBIT_MQ_URI')],
        queue: this.configService.get<string>(`NOTIFICATION_SERVICE_RABBIT_MQ_${queue}_QUEUE`),
        noAck,
        persistent: true,
        queueOptions: {
          durable: true,
        },
      },
      
    };
  }

  ack(context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();
    channel.ack(originalMessage);
  }
}
