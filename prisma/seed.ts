﻿import {PrismaClient} from '@prisma/client';
import * as process from "node:process";

const prisma = new PrismaClient();

async function main() {
    await prisma.room.createMany({
        data: [
            {type: 'Junior Suite', maxOccupancy: 2, numberOfBeds: 1, hasOceanView: false, baseRate: 60},
            {type: 'King Suite', maxOccupancy: 3, numberOfBeds: 1, hasOceanView: true, baseRate: 90},
            {type: 'Presidential Suite', maxOccupancy: 5, numberOfBeds: 2, hasOceanView: true, baseRate: 150},
            {
                type: "Presidential Suite",
                maxOccupancy: 8,
                numberOfBeds: 1,
                hasOceanView: true,
                baseRate: 482.67
            },
            {
                type: "King Suite",
                maxOccupancy: 4,
                numberOfBeds: 3,
                hasOceanView: false,
                baseRate: 911.62
            },
            {
                type: "Junior Suite",
                maxOccupancy: 8,
                numberOfBeds: 2,
                hasOceanView: true,
                baseRate: 141.54
            },
            {
                type: "Presidential Suite",
                maxOccupancy: 1,
                numberOfBeds: 1,
                hasOceanView: false,
                baseRate: 599.49
            },
            {
                type: "Deluxe Room",
                maxOccupancy: 2,
                numberOfBeds: 5,
                hasOceanView: true,
                baseRate: 738.96
            },
            {
                type: "Deluxe Room",
                maxOccupancy: 3,
                numberOfBeds: 4,
                hasOceanView: false,
                baseRate: 822.86
            },
            {
                type: "Deluxe Room",
                maxOccupancy: 2,
                numberOfBeds: 4,
                hasOceanView: false,
                baseRate: 927.08
            },
            {
                type: "Standard Room",
                maxOccupancy: 4,
                numberOfBeds: 4,
                hasOceanView: false,
                baseRate: 183.96
            },
            {
                type: "Deluxe Room",
                maxOccupancy: 5,
                numberOfBeds: 1,
                hasOceanView: false,
                baseRate: 620.75
            },
            {
                type: "Standard Room",
                maxOccupancy: 10,
                numberOfBeds: 4,
                hasOceanView: false,
                baseRate: 58.69
            },
            {
                type: "King Suite",
                maxOccupancy: 3,
                numberOfBeds: 5,
                hasOceanView: true,
                baseRate: 706.81
            },
            {
                type: "Standard Room",
                maxOccupancy: 9,
                numberOfBeds: 2,
                hasOceanView: true,
                baseRate: 61.42
            },
            {
                type: "Junior Suite",
                maxOccupancy: 8,
                numberOfBeds: 2,
                hasOceanView: false,
                baseRate: 954.57
            },
            {
                type: "Presidential Suite",
                maxOccupancy: 7,
                numberOfBeds: 5,
                hasOceanView: false,
                baseRate: 254.8
            },
            {
                type: "King Suite",
                maxOccupancy: 4,
                numberOfBeds: 2,
                hasOceanView: true,
                baseRate: 795.79
            },
            {
                type: "Standard Room",
                maxOccupancy: 10,
                numberOfBeds: 4,
                hasOceanView: true,
                baseRate: 422.25
            },
            {
                type: "Presidential Suite",
                maxOccupancy: 8,
                numberOfBeds: 2,
                hasOceanView: true,
                baseRate: 670.54
            },
            {
                type: "Presidential Suite",
                maxOccupancy: 8,
                numberOfBeds: 4,
                hasOceanView: false,
                baseRate: 859.97
            },
            {
                type: "Junior Suite",
                maxOccupancy: 1,
                numberOfBeds: 3,
                hasOceanView: true,
                baseRate: 152.5
            },
            {
                type: "Junior Suite",
                maxOccupancy: 1,
                numberOfBeds: 5,
                hasOceanView: true,
                baseRate: 158.19
            },
            {
                type: "Junior Suite",
                maxOccupancy: 7,
                numberOfBeds: 2,
                hasOceanView: false,
                baseRate: 652.18
            },
            {
                type: "Deluxe Room",
                maxOccupancy: 3,
                numberOfBeds: 4,
                hasOceanView: true,
                baseRate: 473.22
            },
            {
                type: "Presidential Suite",
                maxOccupancy: 1,
                numberOfBeds: 1,
                hasOceanView: true,
                baseRate: 417.94
            },
            {
                type: "Junior Suite",
                maxOccupancy: 9,
                numberOfBeds: 3,
                hasOceanView: true,
                baseRate: 270.4
            },
            {
                type: "Deluxe Room",
                maxOccupancy: 1,
                numberOfBeds: 4,
                hasOceanView: false,
                baseRate: 368.21
            },
            {
                type: "King Suite",
                maxOccupancy: 4,
                numberOfBeds: 2,
                hasOceanView: true,
                baseRate: 475.07
            },
            {
                type: "Junior Suite",
                maxOccupancy: 3,
                numberOfBeds: 4,
                hasOceanView: false,
                baseRate: 696.9
            },
            {
                type: "Deluxe Room",
                maxOccupancy: 2,
                numberOfBeds: 4,
                hasOceanView: true,
                baseRate: 955.01
            },
            {
                type: "King Suite",
                maxOccupancy: 2,
                numberOfBeds: 1,
                hasOceanView: false,
                baseRate: 551.95
            },
            {
                type: "King Suite",
                maxOccupancy: 3,
                numberOfBeds: 1,
                hasOceanView: true,
                baseRate: 637.46
            },
            {
                type: "King Suite",
                maxOccupancy: 2,
                numberOfBeds: 3,
                hasOceanView: false,
                baseRate: 782.22
            },
            {
                type: "Deluxe Room",
                maxOccupancy: 7,
                numberOfBeds: 1,
                hasOceanView: true,
                baseRate: 782.63
            },
            {
                type: "Junior Suite",
                maxOccupancy: 4,
                numberOfBeds: 4,
                hasOceanView: true,
                baseRate: 951.23
            },
            {
                type: "Deluxe Room",
                maxOccupancy: 6,
                numberOfBeds: 3,
                hasOceanView: true,
                baseRate: 417.63
            },
            {
                type: "King Suite",
                maxOccupancy: 1,
                numberOfBeds: 3,
                hasOceanView: true,
                baseRate: 66.52
            },
            {
                type: "Presidential Suite",
                maxOccupancy: 7,
                numberOfBeds: 4,
                hasOceanView: false,
                baseRate: 639.73
            },
            {
                type: "Standard Room",
                maxOccupancy: 8,
                numberOfBeds: 5,
                hasOceanView: true,
                baseRate: 718.48
            },
            {
                type: "Standard Room",
                maxOccupancy: 4,
                numberOfBeds: 4,
                hasOceanView: false,
                baseRate: 335.44
            },
            {
                type: "Junior Suite",
                maxOccupancy: 8,
                numberOfBeds: 4,
                hasOceanView: false,
                baseRate: 851.81
            },
            {
                type: "Presidential Suite",
                maxOccupancy: 3,
                numberOfBeds: 4,
                hasOceanView: true,
                baseRate: 306.39
            },
            {
                type: "Deluxe Room",
                maxOccupancy: 10,
                numberOfBeds: 2,
                hasOceanView: false,
                baseRate: 790.06
            },
            {
                type: "Deluxe Room",
                maxOccupancy: 10,
                numberOfBeds: 3,
                hasOceanView: true,
                baseRate: 510.03
            },
            {
                type: "Deluxe Room",
                maxOccupancy: 3,
                numberOfBeds: 3,
                hasOceanView: false,
                baseRate: 266.66
            },
            {
                type: "Standard Room",
                maxOccupancy: 5,
                numberOfBeds: 2,
                hasOceanView: false,
                baseRate: 213.23
            },
            {
                type: "Standard Room",
                maxOccupancy: 2,
                numberOfBeds: 3,
                hasOceanView: false,
                baseRate: 517.11
            },
            {
                type: "Standard Room",
                maxOccupancy: 6,
                numberOfBeds: 1,
                hasOceanView: true,
                baseRate: 253.68
            },
            {
                type: "Presidential Suite",
                maxOccupancy: 6,
                numberOfBeds: 4,
                hasOceanView: false,
                baseRate: 839.47
            },
            {
                type: "Deluxe Room",
                maxOccupancy: 5,
                numberOfBeds: 5,
                hasOceanView: false,
                baseRate: 456.65
            },
            {
                type: "Deluxe Room",
                maxOccupancy: 2,
                numberOfBeds: 5,
                hasOceanView: false,
                baseRate: 436.36
            },
            {
                type: "King Suite",
                maxOccupancy: 8,
                numberOfBeds: 4,
                hasOceanView: true,
                baseRate: 86.19
            },
            {
                type: "Presidential Suite",
                maxOccupancy: 9,
                numberOfBeds: 1,
                hasOceanView: false,
                baseRate: 591.51
            },
            {
                type: "King Suite",
                maxOccupancy: 4,
                numberOfBeds: 1,
                hasOceanView: false,
                baseRate: 430.15
            },
            {
                type: "King Suite",
                maxOccupancy: 10,
                numberOfBeds: 5,
                hasOceanView: false,
                baseRate: 514.1
            },
            {
                type: "Junior Suite",
                maxOccupancy: 10,
                numberOfBeds: 3,
                hasOceanView: false,
                baseRate: 350.19
            },
            {
                type: "King Suite",
                maxOccupancy: 3,
                numberOfBeds: 4,
                hasOceanView: true,
                baseRate: 392.33
            },
            {
                type: "Deluxe Room",
                maxOccupancy: 2,
                numberOfBeds: 3,
                hasOceanView: true,
                baseRate: 700.22
            },
            {
                type: "Standard Room",
                maxOccupancy: 10,
                numberOfBeds: 1,
                hasOceanView: false,
                baseRate: 390.65
            },
            {
                type: "Standard Room",
                maxOccupancy: 2,
                numberOfBeds: 3,
                hasOceanView: false,
                baseRate: 561.5
            },
            {
                type: "Standard Room",
                maxOccupancy: 10,
                numberOfBeds: 4,
                hasOceanView: false,
                baseRate: 800.03
            },
            {
                type: "King Suite",
                maxOccupancy: 9,
                numberOfBeds: 2,
                hasOceanView: true,
                baseRate: 569.23
            },
            {
                type: "Standard Room",
                maxOccupancy: 10,
                numberOfBeds: 3,
                hasOceanView: true,
                baseRate: 761.82
            },
            {
                type: "King Suite",
                maxOccupancy: 2,
                numberOfBeds: 1,
                hasOceanView: false,
                baseRate: 494.44
            },
            {
                type: "Standard Room",
                maxOccupancy: 2,
                numberOfBeds: 3,
                hasOceanView: false,
                baseRate: 514.01
            },
            {
                type: "Deluxe Room",
                maxOccupancy: 6,
                numberOfBeds: 1,
                hasOceanView: false,
                baseRate: 611.68
            },
            {
                type: "Presidential Suite",
                maxOccupancy: 10,
                numberOfBeds: 3,
                hasOceanView: false,
                baseRate: 563.43
            },
            {
                type: "Presidential Suite",
                maxOccupancy: 1,
                numberOfBeds: 1,
                hasOceanView: true,
                baseRate: 629.47
            },
            {
                type: "Junior Suite",
                maxOccupancy: 5,
                numberOfBeds: 5,
                hasOceanView: true,
                baseRate: 807.93
            },
            {
                type: "Junior Suite",
                maxOccupancy: 1,
                numberOfBeds: 4,
                hasOceanView: true,
                baseRate: 608.91
            },
            {
                type: "Presidential Suite",
                maxOccupancy: 6,
                numberOfBeds: 3,
                hasOceanView: true,
                baseRate: 360.49
            },
            {
                type: "Presidential Suite",
                maxOccupancy: 8,
                numberOfBeds: 3,
                hasOceanView: true,
                baseRate: 700.44
            },
            {
                type: "Standard Room",
                maxOccupancy: 7,
                numberOfBeds: 3,
                hasOceanView: true,
                baseRate: 819.79
            },
            {
                type: "King Suite",
                maxOccupancy: 9,
                numberOfBeds: 2,
                hasOceanView: false,
                baseRate: 570.69
            },
            {
                type: "Standard Room",
                maxOccupancy: 8,
                numberOfBeds: 5,
                hasOceanView: true,
                baseRate: 938.86
            },
            {
                type: "Deluxe Room",
                maxOccupancy: 7,
                numberOfBeds: 5,
                hasOceanView: true,
                baseRate: 660.21
            },
            {
                type: "Deluxe Room",
                maxOccupancy: 8,
                numberOfBeds: 5,
                hasOceanView: false,
                baseRate: 507.61
            },
            {
                type: "Deluxe Room",
                maxOccupancy: 10,
                numberOfBeds: 4,
                hasOceanView: false,
                baseRate: 865.44
            },
            {
                type: "Junior Suite",
                maxOccupancy: 3,
                numberOfBeds: 5,
                hasOceanView: false,
                baseRate: 531.06
            },
            {
                type: "Junior Suite",
                maxOccupancy: 9,
                numberOfBeds: 5,
                hasOceanView: false,
                baseRate: 899.84
            },
            {
                type: "Junior Suite",
                maxOccupancy: 1,
                numberOfBeds: 5,
                hasOceanView: false,
                baseRate: 747.44
            },
            {
                type: "Deluxe Room",
                maxOccupancy: 8,
                numberOfBeds: 4,
                hasOceanView: false,
                baseRate: 485.84
            }
        ],
    });
}

main().catch(e =>{
    console.error(e);
    process.exit(1);
}).finally(() => prisma.$disconnect());