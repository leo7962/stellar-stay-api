import {ApiQuery, ApiTags} from "@nestjs/swagger";
import {BadRequestException, Controller, Get, HttpException, HttpStatus, Query} from "@nestjs/common";
import {RoomSearchDto} from "src/dtos/RoomSearchDto";
import {RoomDto} from "src/dtos/RoomDto";
import {RoomService} from "src/services/RoomService";

@ApiTags('Rooms')
@Controller('rooms')
export class RoomsController {
    constructor(private readonly roomService: RoomService) {
    }

    @Get('available')
    @ApiQuery({name: 'checkInDate', required: true})
    @ApiQuery({name: 'checkOutDate', required: true})
    @ApiQuery({name: 'numberOfGuests', required: true})
    @ApiQuery({name: 'includesBreakfast', required: false})
    @ApiQuery({name: 'roomType', required: true})
    async getAvailableRooms(@Query() searchDto: RoomSearchDto): Promise<RoomDto[]> {
        try {
            return this.roomService.getAvailableRooms(searchDto);
        } catch (e) {
            if (e instanceof BadRequestException) {
                throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
            }
            throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}