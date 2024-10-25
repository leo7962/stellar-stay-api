import {IsBoolean, IsInt, Max, Min} from "class-validator";

export class RoomDto {
    @IsInt()
    @Min(1)
    id: number;

    @IsInt()
    @Min(1)
    @Max(10)
    maxOccupancy: number;

    @IsInt()
    @Min(1)
    @Max(10)
    numberOfBeds: number;

    @IsBoolean()
    hasOceanView: boolean;

    @IsInt()
    baseRate: number;
}