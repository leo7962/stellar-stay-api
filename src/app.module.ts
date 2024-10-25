import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import {RoomsController} from "./controllers/roomsController";
import {ReservationsController} from "./controllers/reservationsController";
import {RoomService} from "./services/RoomService";
import {PricingService} from "./services/PricingService";
import {ReservationService} from "./services/ReservationService";

@Module({
  imports: [],
  controllers: [ RoomsController, ReservationsController],
  providers: [ PrismaService, RoomService, RoomService, PricingService, ReservationService],
})
export class AppModule {}
