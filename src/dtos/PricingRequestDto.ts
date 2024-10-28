﻿import { IsBoolean, IsDate, IsInt, IsString, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class PricingRequestDto {
  @ApiProperty({ description: 'Type of the room', example: 'Deluxe' })
  @IsString()
  roomType: string;

  @ApiProperty({ description: 'Check-in date', example: '10-12-2024' })
  @IsDate()
  @Type(() => Date)
  checkInDate: Date;

  @ApiProperty({ description: 'Check-out date', example: '10-12-2024' })
  @IsDate()
  @Type(() => Date)
  checkOutDate: Date;

  @ApiProperty({
    description: 'Indicates if breakfast is included',
    example: true,
  })
  @IsBoolean()
  includesBreakfast: boolean;

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
}
