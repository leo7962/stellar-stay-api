import {Test, TestingModule } from "@nestjs/testing";
import { RoomsController } from "src/controllers/roomsController";
import { RoomDto } from "src/dtos/RoomDto";
import { RoomSearchDto } from "src/dtos/RoomSearchDto";
import { RoomService } from "src/services/RoomService";


describe('RoomsController', () => {
	let controller: RoomsController;
	let service: RoomService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [RoomsController],
			providers: [
				{
					provide: RoomService,
					useValue: {
						getAvailableRooms: jest.fn(),
					},
				},
			],
		}).compile();

		controller = module.get<RoomsController>(RoomsController);
		service = module.get<RoomService>(RoomService);
	});

	it('should return available rooms', async () => {
		const dto: RoomSearchDto = { checkInDate: new Date(), checkOutDate: new Date(), numberOfGuests: 2, includesBreakfast: true, roomType: 'suite' };
		const result: RoomDto[] = [{ id: 1, maxOccupancy: 4, numberOfBeds: 2, hasOceanView: true, baseRate: 200 }];

		jest.spyOn(service, 'getAvailableRooms').mockResolvedValue(result);

		expect(await controller.getAvailableRooms(dto)).toEqual(result);
		expect(service.getAvailableRooms).toHaveBeenCalledWith(dto);
	});

	it('should throw an error if no rooms are available', async () => {
		const dto: RoomSearchDto = { checkInDate: new Date(), checkOutDate: new Date(), numberOfGuests: 2, includesBreakfast: true, roomType: 'suite' };

		jest.spyOn(service, 'getAvailableRooms').mockRejectedValue(new Error('No rooms available'));

		await expect(controller.getAvailableRooms(dto)).rejects.toThrowError('No rooms available');
	});
});
