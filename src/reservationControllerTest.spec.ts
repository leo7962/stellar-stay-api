import { Test, TestingModule } from '@nestjs/testing';
import { ReservationsController } from './controllers/reservationsController';
import { ReservationService } from './services/ReservationService';
import { CreateReservationDto } from './dtos/CreateReservationDto';
import { ReservationDto } from './dtos/ReservationDto';
import { mockReservationService } from './mocks/reservation.service.mock';

describe('ReservationsController', () => {
  let controller: ReservationsController;
  let service: ReservationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReservationsController],
      providers: [
        {
          provide: ReservationService,
          useValue: mockReservationService,
        },
      ],
    }).compile();

    controller = module.get<ReservationsController>(ReservationsController);
    service = module.get<ReservationService>(ReservationService);
  });

  it('should create a reservation successfully', async () => {
    const dto: CreateReservationDto = {
      roomId: 1,
      checkInDate: new Date(),
      checkOutDate: new Date(),
      numberOfGuests: 2,
      includesBreakfast: true,
    };
    const result: ReservationDto = { id: 1, ...dto, totalPrice: 100 };

    expect(await controller.create(dto)).toEqual(result);
    expect(service.createReservation).toHaveBeenCalledWith(dto);
  });

  it('should return a reservation by ID', async () => {
    const result: ReservationDto = {
      id: 1,
      roomId: 1,
      checkInDate: new Date(),
      checkOutDate: new Date(),
      numberOfGuests: 2,
      includesBreakFast: true,
      totalPrice: 100,
    };

    expect(await controller.getReservationById(1)).toEqual(result);
    expect(service.getReservationById).toHaveBeenCalledWith(1);
  });
});