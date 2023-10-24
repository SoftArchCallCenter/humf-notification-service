import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '../../databases/abstract.schema';

@Schema()
export class Notification extends AbstractDocument{

  @Prop()
  user_id: string;

  @Prop()
  kitchen_id: string;

  @Prop()
  order_id: string;

  @Prop()
  ticket_id: string;

  @Prop()
  status: string;

  @Prop()
  datetime: Date;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);