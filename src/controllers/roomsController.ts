import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  BadRequestException,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';

import { RoomDto } from '../dtos/RoomDto';
import { RoomService } from '../services/RoomService';
import { RoomSearchDto } from '../dtos/RoomSearchDto';

@ApiTags('Rooms')
@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomService: RoomService) {}

  @Get('available')
  @ApiOperation({ summary: 'Get available rooms based on search criteria' })
  @ApiQuery({
    name: 'checkInDate',
    required: true,
    description: 'Check-in date (DD-MM-YYYY)',
    type: String,
  })
  @ApiQuery({
    name: 'checkOutDate',
    required: true,
    description: 'Check-out date (DD-MM-YYYY)',
    type: String,
  })
  @ApiQuery({
    name: 'numberOfGuests',
    required: true,
    description: 'Number of guests',
    type: Number,
  })
  @ApiQuery({
    name: 'includesBreakfast',
    required: false,
    description: 'Whether breakfast is included (true/false)',
    type: Boolean,
  })
  @ApiQuery({
    name: 'roomType',
    required: true,
    description: 'Type of the room',
    type: String,
  })
  @ApiResponse({
    status: 200,
    description:
      'Returns a list of available rooms matching the search criteria.',
    type: [RoomDto],
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request. Invalid search criteria.',
  })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  async getAvailableRooms(
    @Query() searchDto: RoomSearchDto,
  ): Promise<RoomDto[]> {
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
