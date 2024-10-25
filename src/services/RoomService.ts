import {Injectable} from "@nestjs/common";
import {PrismaService} from "../prisma/prisma.service";
import {RoomSearchDto} from "../dtos/RoomSearchDto";
import {RoomDto} from "src/dtos/RoomDto";
import {PricingService} from "./PricingService";
import {PricingRequestDto} from "../dtos/PricingRequestDto";

@Injectable()
export class RoomService {
    constructor(private readonly prisma: PrismaService, private pricingService: PricingService) {
    }

    async getAvailableRooms(searchDto: RoomSearchDto): Promise<RoomDto[]> {
        const {checkInDate, checkOutDate, numberOfGuests, roomType} = searchDto;

        try {
            const availableRooms = await this.prisma.room.findMany({
                where: {
                    type: roomType || undefined,
                    maxOccupancy: {gte: numberOfGuests},
                    reservations: {
                        none: {
                            OR: [
                                {checkInDate: {lt: checkOutDate}, checkOutDate: {gt: checkInDate}}
                            ],
                        },
                    },
                },
            });

            return availableRooms.map(room => ({
                ...room,
                totalPrice: this.calculateRoomPrice(room, searchDto),
            }));

        } catch (err) {
            console.log(err);
            throw new Error("Error get rooms");
        }
    }

    private calculateRoomPrice(room: any, searchDto: RoomSearchDto): number {
        const {checkInDate, checkOutDate, numberOfGuests, includesBreakfast} = searchDto;

        const pricingRequest: PricingRequestDto = {
            roomType: room.type,
            checkInDate: new Date(checkInDate.toISOString()),
            checkOutDate: new Date(checkOutDate.toISOString()),
            numberOfGuests,
            includesBreakfast,
        };

        return this.pricingService.calculatePrice(pricingRequest);
    }
}