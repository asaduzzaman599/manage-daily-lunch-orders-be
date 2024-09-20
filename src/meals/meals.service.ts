import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';
import { PrismaService } from 'src/prisma.service';
import { FoodpacksService } from 'src/foodpacks/foodpacks.service';
import { NotFoundError } from 'rxjs';
import { title } from 'process';
import { Prisma } from '@prisma/client';
import { RestaurantService } from 'src/restaurant/restaurant.service';

@Injectable()
export class MealsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly foodPackService: FoodpacksService,
    private readonly restaurantService: RestaurantService,
  ) {}
  create(createMealDto: CreateMealDto) {
    return this.prismaService.$transaction(
      async (tx: Prisma.TransactionClient) => {
        const { foodPackId, ...data } = createMealDto;
        const [foodpack] = await Promise.all([
          this.foodPackService.findOne(foodPackId),
        ]);

        if (!foodpack) throw new BadRequestException(`Food pack not found!`);

        const meal = await tx.meal.create({
          data: { ...data, restaurantId: foodpack.restaurantId },
        });

        await tx.foodPackWithMeal.create({
          data: {
            mealId: meal.id,
            foodPackId,
          },
        });

        return meal;
      },
    );
  }

  findAll() {
    return `This action returns all meals`;
  }

  findOne(id: number) {
    return `This action returns a #${id} meal`;
  }

  update(id: number, updateMealDto: UpdateMealDto) {
    return `This action updates a #${id} meal`;
  }

  remove(id: number) {
    return `This action removes a #${id} meal`;
  }
}
