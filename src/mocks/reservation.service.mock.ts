import { ReservationDto } from "../dtos/ReservationDto";
import { CreateReservationDto } from "../dtos/CreateReservationDto";


export const mockReservationService = {
  createReservation: jest.fn((dto: CreateReservationDto): ReservationDto => ({
    id: 1,
    ...dto,
    totalPrice: 100,
  })),
  getReservationById: jest.fn((id: number): ReservationDto | undefined => {
    if (id === 1) {
      return {
        id: 1,
        roomId: 1,
        checkInDate: new Date(),
        checkOutDate: new Date(),
        numberOfGuests: 2,
        includesBreakFast: true,
        totalPrice: 100,
      };
    }
    throw new Error('Reservation not found');
  }),
};
