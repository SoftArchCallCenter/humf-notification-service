import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from '../databases/abstract.repository';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { Notification } from './entities/notification.entity';

@Injectable()
export class NotificationRepository extends AbstractRepository<Notification> {
    protected readonly logger = new Logger(NotificationRepository.name);

    constructor(
        @InjectModel(Notification.name) protected readonly notiModel: Model<Notification>,
        @InjectConnection() connection: Connection,
    ) {
            super(notiModel, connection);
        }
        
    async getStatus(order_id: string): Promise<string | null> {
        const result = await this.notiModel.find({order_id: order_id}).sort({datetime: -1}).limit(1).select({status: 1}).lean();

        if (result.length === 0) {
        return null;
        }

        return result[0].status;
    }
}
