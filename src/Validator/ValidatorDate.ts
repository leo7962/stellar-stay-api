import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

prisma.$use(async (params, next) => {
  if (params.model === 'Reservation' && params.action === 'create') {
    const { checkInDate, checkOutDate } = params.args.data;
    if (new Date(checkOutDate) <= new Date(checkInDate)) {
      throw new Error('Check-out date must be after check-in date.');
    }
  }

  return next(params);
});
