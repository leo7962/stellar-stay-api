import {IsBoolean, IsDate, IsInt, IsString, Max, Min} from "class-validator";
import {Type} from "class-transformer";

export class PricingRequestDto {
    @IsString()
    roomType: string;

    @IsDate()
    @Type(() => Date)
    checkInDate: Date;

    @IsDate()
    @Type(() => Date)
    checkOutDate: Date;

    @IsBoolean()
    includesBreakfast: boolean;

    @IsInt()
    @Min(1)
    @Max(10)
    numberOfGuests: number;
}