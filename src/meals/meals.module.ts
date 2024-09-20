import { Module } from '@nestjs/common';
import { MealsService } from './meals.service';
import { MealsController } from './meals.controller';
import { PrismaModule } from 'src/prisma.module';
import { FoodpacksModule } from 'src/foodpacks/foodpacks.module';
import { RestaurantModule } from 'src/restaurant/restaurant.module';

@Module({
  imports: [PrismaModule, FoodpacksModule, RestaurantModule],
  controllers: [MealsController],
  providers: [MealsService],
})
export class MealsModule {}
