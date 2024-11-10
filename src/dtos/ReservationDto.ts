import { IsBoolean, IsDate, IsInt, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class ReservationDto {
  @ApiProperty({ description: 'Reservation ID', example: 1 })
  @IsInt()
  @Min(1)
  id: number;

  @ApiProperty({ description: 'Room ID', example: 101 })
  @IsInt()
  @Min(1)
  roomId: number;

  @ApiProperty({ description: 'Check-in date', example: '2024-12-20' })
  @IsDate()
  @Type(() => Date)
  checkInDate: Date;

  @ApiProperty({ description: 'Check-out date', example: '2024-12-24' })
  @IsDate()
  @Type(() => Date)
  checkOutDate: Date;

  @ApiProperty({
    description: 'Number of guests',
    example: 2,
    minimum: 1,
    maximum: 10,
  })
  @IsInt()
  @Min(1)
  @Max(10)
  numberOfGuests: number;

  @ApiProperty({
    description: 'Indicates if breakfast is included',
    example: true,
    required: false,
  })
  @IsBoolean()
  includesBreakFast?: boolean;

  @ApiProperty({ description: 'Total price of the reservation', example: 200 })
  @IsInt()
  totalPrice: number;
}
