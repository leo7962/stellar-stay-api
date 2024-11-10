import { RoomType } from "src/enums/room-types.enum";

export const ROOM_BASE_RATES = {
  [RoomType.JUNIOR_SUITE]: 60,
  [RoomType.KING_SUITE]: 90,
  [RoomType.PRESIDENTIAL_SUITE]: 150
};

export const WEEKEND_SURCHARGE_RATE = 0.25;

export const BREAKFAST_COST_PER_DAY = 5;

export const RENTAL_DISCOUNT_RATES = {
  fourToSixDays: 4,
  sevenToNineDays: 8,
  tenOrMoreDays: 12,
};