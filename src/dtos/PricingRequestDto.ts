import {IsBoolean, IsDate, IsInt, IsString, Max, Min} from "class-validator";

export class PricingRequestDto {
    @IsString()
    roomType: string;

    @IsDate()
    checkInDate: Date;

    @IsDate()
    checkOutDate: Date;

    @IsBoolean()
    includesBreakfast: boolean;

    @IsInt()
    @Min(1)
    @Max(10)
    numberOfGuests: number;
}