import { RoomType } from "src/enums/room-types.enum";

export function convertToUTC(date: string): Date {
    return new Date(date + 'T00:00:00Z');
  }
  
  export function validateCheckInBeforeCheckOut(checkIn: Date, checkOut: Date): void {
    if (checkIn >= checkOut) {
      throw new Error('Check-in date must be before check-out date');
    }
  }
  
  export function validateAndFormatRoomType(type: string): RoomType {
    const formattedType = type.toLowerCase().replace(' ', '_') as RoomType;
    if (!Object.values(RoomType).includes(formattedType)) {
      throw new Error(`Invalid room type: ${type}`);
    }
    return formattedType;
  }