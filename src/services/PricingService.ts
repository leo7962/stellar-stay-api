import { Injectable } from '@nestjs/common';
import { PricingRequestDto } from '../dtos/PricingRequestDto';
import { BREAKFAST_COST_PER_DAY, RENTAL_DISCOUNT_RATES, ROOM_BASE_RATES, WEEKEND_SURCHARGE_RATE } from 'src/config/constants';

@Injectable()
export class PricingService {
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
    const baseRate = ROOM_BASE_RATES[roomType.toLowerCase().replace(' ', '_')];
    let total = days * baseRate;

    if (isWeekend) {
      const weekendDays = this.getWeekendDaysCount(checkInDate, checkOutDate);
      total += weekendDays * (baseRate * WEEKEND_SURCHARGE_RATE);
    }

    total -= this.calculateRentalDiscount(days);

    if (includesBreakfast) {
      total += days * numberOfGuests * BREAKFAST_COST_PER_DAY;
    }

    return total;
  }

  private calculateDaysDifference(checkInDate: Date, checkOutDate: Date): number {
    const timeDiff = checkOutDate.getTime() - checkInDate.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
  }

  private getWeekendDaysCount(checkInDate: Date, checkOutDate: Date): number {
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

  private isWeekend(checkInDate: Date, checkOutDate: Date): boolean {
    return this.getWeekendDaysCount(checkInDate, checkOutDate) > 0;
  }

  private calculateRentalDiscount(days: number): number {
    if (days >= 10) return days * RENTAL_DISCOUNT_RATES.tenOrMoreDays;
    if (days >= 7) return days * RENTAL_DISCOUNT_RATES.sevenToNineDays;
    if (days >= 4) return days * RENTAL_DISCOUNT_RATES.fourToSixDays;
    return 0;
  }
}
