import { Injectable } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RestaurantService {
  constructor(private prisma: PrismaService) {}
  create(createResturantDto: CreateRestaurantDto) {
    return this.prisma.restaurant.create({ data: createResturantDto });
  }

  findAll() {
    return this.prisma.restaurant.findMany({
      include: { foodPacks: true },
    });
  }

  findOne(id: string) {
    return this.prisma.restaurant.findUnique({
      where: { id },
      include: { foodPacks: true },
    });
  }

  update(id: number, updateRestaurantDto: UpdateRestaurantDto) {
    return `This action updates a #${id} restaurant`;
  }

  remove(id: number) {
    return `This action removes a #${id} restaurant`;
  }
}
