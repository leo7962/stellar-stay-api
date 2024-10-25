import {Test, TestingModule } from "@nestjs/testing";
import { ReservationsController } from "src/controllers/reservationsController";
import { CreateReservationDto } from "src/dtos/CreateReservationDto";
import { ReservationDto } from "src/dtos/ReservationDto";
import { ReservationService } from "src/services/ReservationService";


describe('ReservationsController', () => {
	let controller: ReservationsController;
	let service: ReservationService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [ReservationsController],
			providers: [
				{
					provide: ReservationService,
					useValue: {
						createReservation: jest.fn(),
					},
				},
			],
		}).compile();

		controller = module.get<ReservationsController>(ReservationsController);
		service = module.get<ReservationService>(ReservationService);
	});

	it('should create a reservation successfully', async () => {
		const dto: CreateReservationDto = { roomId: 1, checkInDate: new Date(), checkOutDate: new Date(), numberOfGuests: 2, includesBreakfast: true };
		const result: ReservationDto = { id: 1, ...dto, totalPrice: 100 };

		jest.spyOn(service, 'createReservation').mockResolvedValue(result);

		expect(await controller.create(dto)).toEqual(result);
		expect(service.createReservation).toHaveBeenCalledWith(dto);
	});

	it('should return 400 if creation fails due to bad request', async () => {
		const dto: CreateReservationDto = { roomId: 1, checkInDate: new Date(), checkOutDate: new Date(), numberOfGuests: 0, includesBreakfast: true }; // Invalid guests
		jest.spyOn(service, 'createReservation').mockRejectedValue(new Error('Bad Request'));

		await expect(controller.create(dto)).rejects.toThrowError('Bad Request');
	});

	it('should return a reservation by ID', async () => {
		const result: ReservationDto = { id: 1, roomId: 1, checkInDate: new Date(), checkOutDate: new Date(), numberOfGuests: 2, totalPrice: 100 };
		jest.spyOn(service, 'getReservationById').mockResolvedValue(result);

		expect(await controller.getReservationById(1)).toEqual(result);
		expect(service.getReservationById).toHaveBeenCalledWith(1);
	});

	it('should throw an error if reservation not found', async () => {
		jest.spyOn(service, 'getReservationById').mockRejectedValue(new Error('Reservation not found'));

		await expect(controller.getReservationById(999)).rejects.toThrowError('Reservation not found');
	});

});
