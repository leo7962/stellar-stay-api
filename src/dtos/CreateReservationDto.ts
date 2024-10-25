﻿import {IsBoolean, IsDate, IsInt, IsOptional, Max, Min} from "class-validator";
import {Type} from "class-transformer";

export class CreateReservationDto {
    @IsInt()
    @Min(1)
    roomId: number;

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
}