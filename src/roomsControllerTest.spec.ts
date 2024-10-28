import { Test, TestingModule } from '@nestjs/testing';
import { RoomsController } from './controllers/roomsController';
import { RoomService } from './services/RoomService';
import { RoomSearchDto } from './dtos/RoomSearchDto';
import { RoomDto } from './dtos/RoomDto';
import { mockRoomService } from './mocks/room.service.mock';

describe('RoomsController', () => {
  let controller: RoomsController;
  let service: RoomService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoomsController],
      providers: [
        {
          provide: RoomService,
          useValue: mockRoomService,
        },
      ],
    }).compile();

    controller = module.get<RoomsController>(RoomsController);
    service = module.get<RoomService>(RoomService);
  });

  it('should return available rooms', async () => {
    const dto: RoomSearchDto = {
      checkInDate: new Date(),
      checkOutDate: new Date(),
      numberOfGuests: 2,
      includesBreakfast: true,
      roomType: 'suite',
    };
    const result: RoomDto[] = [
      {
        id: 1,
        maxOccupancy: 4,
        numberOfBeds: 2,
        hasOceanView: true,
        baseRate: 200,
      },
    ];

    expect(await controller.getAvailableRooms(dto)).toEqual(result);
    expect(service.getAvailableRooms).toHaveBeenCalledWith(dto);
  });
});