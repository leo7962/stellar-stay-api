import { ApiProperty } from "@nestjs/swagger";
import {IsBoolean, IsInt, Max, Min} from "class-validator";

export class RoomDto {
    @ApiProperty({ description: 'Room ID', example: 101 })
    @IsInt()
    @Min(1)
    id: number;

    @ApiProperty({ description: 'Maximum occupancy of the room', example: 4, minimum: 1, maximum: 10 })
    @IsInt()
    @Min(1)
    @Max(10)
    maxOccupancy: number;

    @ApiProperty({ description: 'Number of beds in the room', example: 2, minimum: 1, maximum: 10 })
    @IsInt()
    @Min(1)
    @Max(10)
    numberOfBeds: number;

    @ApiProperty({ description: 'Indicates if the room has an ocean view', example: true })
    @IsBoolean()
    hasOceanView: boolean;

    @ApiProperty({ description: 'Base rate of the room per night', example: 150 })
    @IsInt()
    baseRate: number;
}