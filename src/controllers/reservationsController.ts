import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { ReservationService } from '../services/ReservationService';
import { CreateReservationDto } from '../dtos/CreateReservationDto';
import { ReservationDto } from '../dtos/ReservationDto';

@ApiTags('Reservation')
@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationService: ReservationService) {}

  @Post()
  @ApiOperation({ summary: 'Create a reservation' })
  @ApiBody({ type: CreateReservationDto })
  @ApiResponse({
    status: 201,
    description: 'The reservation has been created.',
    type: ReservationDto,
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async create(
    @Body() createReservationDto: CreateReservationDto,
  ): Promise<ReservationDto> {
    try {
      return this.reservationService.createReservation(createReservationDto);
    } catch (e) {
      if (e instanceof BadRequestException) {
        throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
      }
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get reservations by ID' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'The ID of the reservation to retrieve.',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'The reservation data.',
    type: ReservationDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request. Invalid reservation ID provided.',
  })
  @ApiResponse({ status: 404, description: 'Reservation not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async getReservationById(@Param('id') id: number): Promise<ReservationDto> {
    try {
      return this.reservationService.getReservationById(id);
    } catch (e) {
      if (e instanceof BadRequestException) {
        throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
      }
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  @ApiOperation({ summary: 'Get all reservations' })
  @ApiResponse({
    status: 200,
    description: 'Returns a list of all reservations.',
    type: [ReservationDto],
  })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  async getAllReservations(): Promise<ReservationDto[]> {
    try {
      return this.reservationService.getAllReservations();
    } catch (e) {
      if (e instanceof BadRequestException) {
        throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
      }
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Cancel a reservation by ID' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'ID of the reservation to cancel',
    type: Number,
  })
  @ApiResponse({
    status: 204,
    description: 'Reservation has been successfully canceled.',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request. Invalid reservation ID.',
  })
  @ApiResponse({ status: 404, description: 'Reservation not found.' })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  async cancelReservation(@Param('id') id: number): Promise<void> {
    try {
      return this.reservationService.cancelReservation(id);
    } catch (e) {
      if (e instanceof BadRequestException) {
        throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
      }
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
