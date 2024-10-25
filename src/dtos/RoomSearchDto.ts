import {IsDate, IsInt, IsOptional, IsBoolean, IsString, Min, Max} from 'class-validator';
import { Type } from 'class-transformer';

export class RoomSearchDto {
    @IsDate()
    @Type(() => Date)
    checkInDate: Date;

    @IsDate()
    @Type(() => Date)
    checkOutDate: Date;

    @IsInt()
    @Min(1)
    @Max(10)
    numberOfGuests: number;

    @IsOptional()
    @IsBoolean()
    includesBreakfast?: boolean;

    @IsString()
    roomType: string;
}