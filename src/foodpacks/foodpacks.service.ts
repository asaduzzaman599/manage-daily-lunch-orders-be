import { Injectable } from '@nestjs/common';
import { CreateFoodpackDto } from './dto/create-foodpack.dto';
import { UpdateFoodpackDto } from './dto/update-foodpack.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FoodpacksService {
  constructor(private prisma: PrismaService) {}
  create(createFoodpackDto: CreateFoodpackDto) {
    return this.prisma.foodPack.create({ data: createFoodpackDto });
  }

  findAll() {
    return this.prisma.foodPack.findMany({
      include: { restaurant: true },
    });
  }

  findOne(id: string) {
    return this.prisma.foodPack.findUnique({
      where: { id },
      include: { restaurant: true },
    });
  }

  update(id: number, updateFoodpackDto: UpdateFoodpackDto) {
    return `This action updates a #${id} foodpack`;
  }

  remove(id: number) {
    return `This action removes a #${id} foodpack`;
  }
}
