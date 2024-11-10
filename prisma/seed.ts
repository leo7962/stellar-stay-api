import {PrismaClient} from '@prisma/client';
import * as process from "node:process";

const prisma = new PrismaClient();

async function main() {
    await prisma.room.createMany({
        data: [
            {type: 'junior_suite', maxOccupancy: 2, numberOfBeds: 1, hasOceanView: false, baseRate: 60},
            {type: 'king_suite', maxOccupancy: 3, numberOfBeds: 1, hasOceanView: true, baseRate: 90},
            {type: 'presidential_suite', maxOccupancy: 5, numberOfBeds: 2, hasOceanView: true, baseRate: 150},
            {
                type: "presidential_suite",
                maxOccupancy: 8,
                numberOfBeds: 1,
                hasOceanView: true,
                baseRate: 150
            },
            {
                type: "king_suite",
                maxOccupancy: 4,
                numberOfBeds: 3,
                hasOceanView: false,
                baseRate: 90
            },
            {
                type: "junior_suite",
                maxOccupancy: 8,
                numberOfBeds: 2,
                hasOceanView: true,
                baseRate: 60
            },
            {
                type: "presidential_suite",
                maxOccupancy: 1,
                numberOfBeds: 1,
                hasOceanView: false,
                baseRate: 150
            },
            {
                type: "presidential_suite",
                maxOccupancy: 2,
                numberOfBeds: 5,
                hasOceanView: true,
                baseRate: 150
            },
            {
                type: "presidential_suite",
                maxOccupancy: 3,
                numberOfBeds: 4,
                hasOceanView: false,
                baseRate: 150
            },
            {
                type: "presidential_suite",
                maxOccupancy: 2,
                numberOfBeds: 4,
                hasOceanView: false,
                baseRate: 150
            },
            {
                type: "junior_suite",
                maxOccupancy: 4,
                numberOfBeds: 4,
                hasOceanView: false,
                baseRate: 60
            },
            {
                type: "presidential_suite",
                maxOccupancy: 5,
                numberOfBeds: 1,
                hasOceanView: false,
                baseRate: 150
            },
            {
                type: "junior_suite",
                maxOccupancy: 10,
                numberOfBeds: 4,
                hasOceanView: false,
                baseRate: 60
            },
            {
                type: "king_suite",
                maxOccupancy: 3,
                numberOfBeds: 5,
                hasOceanView: true,
                baseRate: 90
            },
            {
                type: "junior_suite",
                maxOccupancy: 9,
                numberOfBeds: 2,
                hasOceanView: true,
                baseRate: 60
            },
            {
                type: "junior_suite",
                maxOccupancy: 8,
                numberOfBeds: 2,
                hasOceanView: false,
                baseRate: 60
            },
            {
                type: "presidential_suite",
                maxOccupancy: 7,
                numberOfBeds: 5,
                hasOceanView: false,
                baseRate: 150
            },
            {
                type: "king_suite",
                maxOccupancy: 4,
                numberOfBeds: 2,
                hasOceanView: true,
                baseRate: 90
            },
            {
                type: "junior_suite",
                maxOccupancy: 10,
                numberOfBeds: 4,
                hasOceanView: true,
                baseRate: 60
            },
            {
                type: "presidential_suite",
                maxOccupancy: 8,
                numberOfBeds: 2,
                hasOceanView: true,
                baseRate: 150
            },
            {
                type: "presidential_suite",
                maxOccupancy: 8,
                numberOfBeds: 4,
                hasOceanView: false,
                baseRate: 150
            },
            {
                type: "junior_suite",
                maxOccupancy: 1,
                numberOfBeds: 3,
                hasOceanView: true,
                baseRate: 60
            },
            {
                type: "junior_suite",
                maxOccupancy: 1,
                numberOfBeds: 5,
                hasOceanView: true,
                baseRate: 60
            },
            {
                type: "junior_suite",
                maxOccupancy: 7,
                numberOfBeds: 2,
                hasOceanView: false,
                baseRate: 60
            },
            {
                type: "presidential_suite",
                maxOccupancy: 3,
                numberOfBeds: 4,
                hasOceanView: true,
                baseRate: 150
            },
            {
                type: "presidential_suite",
                maxOccupancy: 1,
                numberOfBeds: 1,
                hasOceanView: true,
                baseRate: 150
            },
            {
                type: "junior_suite",
                maxOccupancy: 9,
                numberOfBeds: 3,
                hasOceanView: true,
                baseRate: 60
            },
            {
                type: "presidential_suite",
                maxOccupancy: 1,
                numberOfBeds: 4,
                hasOceanView: false,
                baseRate: 150
            },
            {
                type: "king_suite",
                maxOccupancy: 4,
                numberOfBeds: 2,
                hasOceanView: true,
                baseRate: 90
            },
            {
                type: "junior_suite",
                maxOccupancy: 3,
                numberOfBeds: 4,
                hasOceanView: false,
                baseRate: 60
            },
            {
                type: "presidential_suite",
                maxOccupancy: 2,
                numberOfBeds: 4,
                hasOceanView: true,
                baseRate: 150
            },
            {
                type: "king_suite",
                maxOccupancy: 2,
                numberOfBeds: 1,
                hasOceanView: false,
                baseRate: 90
            },
            {
                type: "king_suite",
                maxOccupancy: 3,
                numberOfBeds: 1,
                hasOceanView: true,
                baseRate: 90
            },
            {
                type: "king_suite",
                maxOccupancy: 2,
                numberOfBeds: 3,
                hasOceanView: false,
                baseRate: 90
            },
            {
                type: "presidential_suite",
                maxOccupancy: 7,
                numberOfBeds: 1,
                hasOceanView: true,
                baseRate: 150
            },
            {
                type: "junior_suite",
                maxOccupancy: 4,
                numberOfBeds: 4,
                hasOceanView: true,
                baseRate: 60
            },
            {
                type: "presidential_suite",
                maxOccupancy: 6,
                numberOfBeds: 3,
                hasOceanView: true,
                baseRate: 150
            },
            {
                type: "king_suite",
                maxOccupancy: 1,
                numberOfBeds: 3,
                hasOceanView: true,
                baseRate: 90
            },
            {
                type: "presidential_suite",
                maxOccupancy: 7,
                numberOfBeds: 4,
                hasOceanView: false,
                baseRate: 150
            },
            {
                type: "junior_suite",
                maxOccupancy: 8,
                numberOfBeds: 5,
                hasOceanView: true,
                baseRate: 60
            },
            {
                type: "junior_suite",
                maxOccupancy: 4,
                numberOfBeds: 4,
                hasOceanView: false,
                baseRate: 60
            },
            {
                type: "junior_suite",
                maxOccupancy: 8,
                numberOfBeds: 4,
                hasOceanView: false,
                baseRate: 60
            },
            {
                type: "presidential_suite",
                maxOccupancy: 3,
                numberOfBeds: 4,
                hasOceanView: true,
                baseRate: 150
            },
            {
                type: "presidential_suite",
                maxOccupancy: 10,
                numberOfBeds: 2,
                hasOceanView: false,
                baseRate: 150
            },
            {
                type: "presidential_suite",
                maxOccupancy: 10,
                numberOfBeds: 3,
                hasOceanView: true,
                baseRate: 150
            },
            {
                type: "presidential_suite",
                maxOccupancy: 3,
                numberOfBeds: 3,
                hasOceanView: false,
                baseRate: 150
            },
            {
                type: "junior_suite",
                maxOccupancy: 5,
                numberOfBeds: 2,
                hasOceanView: false,
                baseRate: 60
            },
            {
                type: "junior_suite",
                maxOccupancy: 2,
                numberOfBeds: 3,
                hasOceanView: false,
                baseRate: 60
            },
            {
                type: "junior_suite",
                maxOccupancy: 6,
                numberOfBeds: 1,
                hasOceanView: true,
                baseRate: 60
            },
            {
                type: "presidential_suite",
                maxOccupancy: 6,
                numberOfBeds: 4,
                hasOceanView: false,
                baseRate: 150
            },
            {
                type: "presidential_suite",
                maxOccupancy: 5,
                numberOfBeds: 5,
                hasOceanView: false,
                baseRate: 150
            },
            {
                type: "presidential_suite",
                maxOccupancy: 2,
                numberOfBeds: 5,
                hasOceanView: false,
                baseRate: 150
            },
            {
                type: "king_suite",
                maxOccupancy: 8,
                numberOfBeds: 4,
                hasOceanView: true,
                baseRate: 90
            },
            {
                type: "presidential_suite",
                maxOccupancy: 9,
                numberOfBeds: 1,
                hasOceanView: false,
                baseRate: 150
            },
            {
                type: "king_suite",
                maxOccupancy: 4,
                numberOfBeds: 1,
                hasOceanView: false,
                baseRate: 90
            },
            {
                type: "king_suite",
                maxOccupancy: 10,
                numberOfBeds: 5,
                hasOceanView: false,
                baseRate: 90
            },
            {
                type: "junior_suite",
                maxOccupancy: 10,
                numberOfBeds: 3,
                hasOceanView: false,
                baseRate: 60
            },
            {
                type: "king_suite",
                maxOccupancy: 3,
                numberOfBeds: 4,
                hasOceanView: true,
                baseRate: 90
            },
            {
                type: "presidential_suite",
                maxOccupancy: 2,
                numberOfBeds: 3,
                hasOceanView: true,
                baseRate: 150
            },
            {
                type: "junior_suite",
                maxOccupancy: 10,
                numberOfBeds: 1,
                hasOceanView: false,
                baseRate: 60
            },
            {
                type: "junior_suite",
                maxOccupancy: 2,
                numberOfBeds: 3,
                hasOceanView: false,
                baseRate: 60
            },
            {
                type: "junior_suite",
                maxOccupancy: 10,
                numberOfBeds: 4,
                hasOceanView: false,
                baseRate: 60
            },
            {
                type: "king_suite",
                maxOccupancy: 9,
                numberOfBeds: 2,
                hasOceanView: true,
                baseRate: 90
            },
            {
                type: "junior_suite",
                maxOccupancy: 10,
                numberOfBeds: 3,
                hasOceanView: true,
                baseRate: 60
            },
            {
                type: "king_suite",
                maxOccupancy: 2,
                numberOfBeds: 1,
                hasOceanView: false,
                baseRate: 90
            },
            {
                type: "junior_suite",
                maxOccupancy: 2,
                numberOfBeds: 3,
                hasOceanView: false,
                baseRate: 60
            },
            {
                type: "presidential_suite",
                maxOccupancy: 6,
                numberOfBeds: 1,
                hasOceanView: false,
                baseRate: 150
            },
            {
                type: "presidential_suite",
                maxOccupancy: 10,
                numberOfBeds: 3,
                hasOceanView: false,
                baseRate: 150
            },
            {
                type: "presidential_suite",
                maxOccupancy: 1,
                numberOfBeds: 1,
                hasOceanView: true,
                baseRate: 150
            },
            {
                type: "junior_suite",
                maxOccupancy: 5,
                numberOfBeds: 5,
                hasOceanView: true,
                baseRate: 60
            },
            {
                type: "junior_suite",
                maxOccupancy: 1,
                numberOfBeds: 4,
                hasOceanView: true,
                baseRate: 60
            },
            {
                type: "presidential_suite",
                maxOccupancy: 6,
                numberOfBeds: 3,
                hasOceanView: true,
                baseRate: 150
            },
            {
                type: "presidential_suite",
                maxOccupancy: 8,
                numberOfBeds: 3,
                hasOceanView: true,
                baseRate: 150
            },
            {
                type: "junior_suite",
                maxOccupancy: 7,
                numberOfBeds: 3,
                hasOceanView: true,
                baseRate: 60
            },
            {
                type: "king_suite",
                maxOccupancy: 9,
                numberOfBeds: 2,
                hasOceanView: false,
                baseRate: 90
            },
            {
                type: "junior_suite",
                maxOccupancy: 8,
                numberOfBeds: 5,
                hasOceanView: true,
                baseRate: 60
            },
            {
                type: "presidential_suite",
                maxOccupancy: 7,
                numberOfBeds: 5,
                hasOceanView: true,
                baseRate: 150
            },
            {
                type: "presidential_suite",
                maxOccupancy: 8,
                numberOfBeds: 5,
                hasOceanView: false,
                baseRate: 150
            },
            {
                type: "presidential_suite",
                maxOccupancy: 10,
                numberOfBeds: 4,
                hasOceanView: false,
                baseRate: 150
            },
            {
                type: "junior_suite",
                maxOccupancy: 3,
                numberOfBeds: 5,
                hasOceanView: false,
                baseRate: 60
            },
            {
                type: "junior_suite",
                maxOccupancy: 9,
                numberOfBeds: 5,
                hasOceanView: false,
                baseRate: 60
            },
            {
                type: "junior_suite",
                maxOccupancy: 1,
                numberOfBeds: 5,
                hasOceanView: false,
                baseRate: 60
            },
            {
                type: "presidential_suite",
                maxOccupancy: 8,
                numberOfBeds: 4,
                hasOceanView: false,
                baseRate: 150
            }
        ],
    });
}

main().catch(e =>{
    console.error(e);
    process.exit(1);
}).finally(() => prisma.$disconnect());