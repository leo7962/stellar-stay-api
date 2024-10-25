import {ApiBody, ApiParam, ApiResponse, ApiTags} from "@nestjs/swagger";
import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Get,
    HttpException,
    HttpStatus,
    Param,
    Post
} from "@nestjs/common";
import {ReservationService} from "../services/ReservationService";
import {CreateReservationDto} from "../dtos/CreateReservationDto";
import {ReservationDto} from "src/dtos/ReservationDto";

@ApiTags('Reservation')
@Controller('reservations')
export class ReservationsController {
    constructor(private readonly reservationService: ReservationService) {
    }

    @Post()
    @ApiBody({type: CreateReservationDto})
    @ApiResponse({status: 201, description: 'The reservation has been created.'})
    @ApiResponse({status: 400, description: 'Bad Request.'})
    async create(@Body() createReservationDto: CreateReservationDto): Promise<ReservationDto> {
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
    @ApiParam({name: 'id', required: true})
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
    @ApiParam({name: 'id', required: true})
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