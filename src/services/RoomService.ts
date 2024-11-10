import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RoomSearchDto } from '../dtos/RoomSearchDto';
import { RoomDto } from 'src/dtos/RoomDto';
import { PricingService } from './PricingService';
import { convertToUTC } from 'src/utils/utils';

@Injectable()
export class RoomService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly pricingService: PricingService,
  ) {}

  async getAvailableRooms(searchDto: RoomSearchDto): Promise<RoomDto[]> {
    const { checkInDate, checkOutDate, numberOfGuests, roomType } = searchDto;

    try {
      const availableRooms = await this.prisma.room.findMany({
        where: {
          type: roomType || undefined,
          maxOccupancy: { gte: Number(numberOfGuests) },
          reservations: {
            none: {
              OR: [
                {
                  checkInDate: { lt: convertToUTC(checkOutDate.toString()) },
                  checkOutDate: { gt: convertToUTC(checkInDate.toString()) },
                },
              ],
            },
          },
        },
      });

      return availableRooms.map((room) => ({
        ...room,
        totalPrice: this.calculateRoomPrice(room, searchDto),
      }));
    } catch (err) {
      console.log(err);
      throw new Error('Error getting rooms');
    }
  }

  private calculateRoomPrice(room: any, searchDto: RoomSearchDto): number {
    return this.pricingService.calculatePrice({
      roomType: room.type,
      checkInDate: convertToUTC(searchDto.checkInDate.toString()),
      checkOutDate: convertToUTC(searchDto.checkOutDate.toString()),
      numberOfGuests: searchDto.numberOfGuests,
      includesBreakfast: searchDto.includesBreakfast,
    });
  }
}
