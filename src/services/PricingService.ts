import { Injectable } from '@nestjs/common';
import { PricingRequestDto } from '../dtos/PricingRequestDto';

@Injectable()
export class PricingService {
  private readonly baseRates = {
    'Junior Suite': 60,
    'King Suite': 90,
    'Presidential Suite': 150,
  };

  calculatePrice(request: PricingRequestDto): number {
    const {
      roomType,
      checkInDate,
      checkOutDate,
      includesBreakfast,
      numberOfGuests,
    } = request;
    const days = this.calculateDaysDifference(checkInDate, checkOutDate);
    const isWeekend = this.isWeekend(checkInDate, checkOutDate);
    const baseRate = this.baseRates[roomType];
    let total = 0;

    total += days * baseRate;

    if (isWeekend) {
      const weekendDays = this.countWeekendDays(checkInDate, checkOutDate);
      total += weekendDays * (baseRate * 0.25);
    }

    total -= this.calculateRentalDiscount(days);

    if (includesBreakfast) {
      total += days * numberOfGuests * 5;
    }

    return total;
  }

  private calculateDaysDifference(
    checkInDate: Date,
    checkOutDate: Date,
  ): number {
    const timeDiff = checkOutDate.getDate() - checkInDate.getDate();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  }

  private isWeekend(checkInDate: Date, checkOutDate: Date): boolean {
    let currentDate = new Date(checkInDate);

    while (currentDate <= checkOutDate) {
      const dayOfWeek = currentDate.getDay();

      if (dayOfWeek === 0 || dayOfWeek === 6) {
        return true;
      }

      currentDate.setDate(currentDate.getDate() + 1);
    }

    return false;
  }

  private countWeekendDays(checkInDate: Date, checkOutDate: Date): number {
    let weekendDaysCount = 0;
    let currentDate = new Date(checkInDate);

    while (currentDate <= checkOutDate) {
      const dayOfWeek = currentDate.getDay();

      if (dayOfWeek === 0 || dayOfWeek === 6) {
        weekendDaysCount++;
      }

      currentDate.setDate(currentDate.getDate() + 1);
    }

    return weekendDaysCount;
  }

  private calculateRentalDiscount(days: number): number {
    if (days >= 10) return days * 12;
    if (days >= 7) return days * 8;
    if (days >= 4) return days * 4;
    return 0;
  }
}
