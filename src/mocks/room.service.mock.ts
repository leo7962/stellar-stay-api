import { RoomDto } from "../dtos/RoomDto";
import { RoomSearchDto } from "../dtos/RoomSearchDto";

export const mockRoomService = {
  getAvailableRooms: jest.fn((dto: RoomSearchDto): RoomDto[] => [
    {
      id: 1,
      maxOccupancy: 4,
      numberOfBeds: 2,
      hasOceanView: true,
      baseRate: 200,
    },
  ]),
};
