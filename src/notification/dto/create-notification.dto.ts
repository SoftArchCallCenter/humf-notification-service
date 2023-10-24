import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateNotificationDto {
    @IsNotEmpty()
    @IsString()
    id: string;
    user_id: string;
    kitchen_id: string;
    order_id: string;

    @IsNotEmpty()
    @IsString()
    status: string;

    @IsNotEmpty()
    @IsDate()
    datetime: Date;
}
