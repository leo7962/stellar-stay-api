import {IsBoolean, IsDate, IsInt, IsOptional, Max, Min} from "class-validator";
import {Type} from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class CreateReservationDto {
    @IsInt()
    @Min(1)
    @ApiProperty({
        example: 1,
        description: 'The ID of the room to be reserved',
    })
    roomId: number;

    @IsDate()
    @Type(() => Date)
    @ApiProperty({
        example: '2024-11-01',
        description: 'The date when the reservation starts',
    })
    checkInDate: Date = new Date();

    @IsDate()
    @Type(() => Date)
    @ApiProperty({
        example: '2024-11-05',
        description: 'The date when the reservation ends',
    })
    checkOutDate: Date;

    @IsInt()
    @Min(1)
    @Max(10)
    @ApiProperty({
        example: 2,
        description: 'The number of guests for the reservation',
    })
    numberOfGuests: number;

    @IsOptional()
    @IsBoolean()
    @ApiProperty({
        example: true,
        description: 'Indicates if the reservation includes breakfast',
    })
    includesBreakfast?: boolean;
}