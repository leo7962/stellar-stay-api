import {IsBoolean, IsDate, IsInt, Max, Min} from "class-validator";
import {Type} from "class-transformer";

export class ReservationDto {
    @IsInt()
    @Min(1)
    id: number;

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

    @IsBoolean()
    includesBreakFast?: boolean;

    @IsInt()
    totalPrice: number;
}