﻿import {Injectable, NotFoundException} from "@nestjs/common";
import {PrismaService} from "../prisma/prisma.service";
import {PricingService} from "./PricingService";
import {CreateReservationDto} from "../dtos/CreateReservationDto";
import {ReservationDto} from "../dtos/ReservationDto";
import {PricingRequestDto} from "../dtos/PricingRequestDto";

@Injectable()
export class ReservationService {
	constructor(private readonly prisma: PrismaService,
	            private readonly pricingService: PricingService) {
	}

	async createReservation(createReservationDto: CreateReservationDto): Promise<ReservationDto> {
		const {roomId, checkInDate, checkOutDate, numberOfGuests, includesBreakfast} = createReservationDto;

		const checkIn = new Date(checkInDate + "T00:00:00Z");
		const checkOut = new Date(checkOutDate + "T00:00:00Z");

		if (checkIn >= checkOut) {
			throw new Error("Check-in date must be before check-out date");
		}

		try {

			const priceRequest: PricingRequestDto = {
				roomType: await this.getRoomType(roomId),
				checkInDate: checkIn,
				checkOutDate: checkOut,
				numberOfGuests,
				includesBreakfast
			};

			const totalPrice = this.pricingService.calculatePrice(priceRequest);

			return this.prisma.reservation.create({
				data: {
					roomId,
					checkInDate: checkIn,
					checkOutDate: checkOut,
					numberOfGuests,
					includesBreakfast,
					totalPrice
				},
			});
		} catch (e) {
			console.log(e.message);
			throw new Error("Error creating reservation");
		}
	}

	async getReservationById(id: number): Promise<ReservationDto> {
		const reservation = await this.prisma.reservation.findUnique({
			where: {id: Number(id)},
		});

		if (!reservation) {
			throw new NotFoundException(`Reservation with ID ${id} not found`);
		}

		return reservation;
	}

	async getAllReservations(): Promise<ReservationDto[]> {
		return this.prisma.reservation.findMany();
	}

	async cancelReservation(id: number): Promise<void> {
		const reservation = await this.prisma.reservation.findUnique({
			where: {id: Number(id)},
		});

		if (!reservation) {
			throw new NotFoundException(`Reservation with ID ${id} not found`);
		}

		await this.prisma.reservation.delete({where: {id: Number(id)}});
	}

	private async getRoomType(roomId: number): Promise<string> {
		const room = await this.prisma.room.findUnique({
			where: {id: roomId},
		});

		if (!room) {
			throw new NotFoundException(`Room with ID ${roomId} not found`);
		}

		return room.type;
	}
}