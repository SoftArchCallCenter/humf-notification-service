import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';

@Schema()
export class Notification {
  @Prop({ type: SchemaTypes.ObjectId })
  _id: Types.ObjectId;

  @Prop()
  user_id: string;

  @Prop()
  kitchen_id: string;

  @Prop()
  order_id: string;

  @Prop()
  status: string;

  @Prop()
  datetime: Date;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);