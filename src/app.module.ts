import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoodpacksModule } from './foodpacks/foodpacks.module';
import { VotesModule } from './votes/votes.module';
import { EmployeesModule } from './employees/employees.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { PrismaModule } from './prisma.module';
import { MealsModule } from './meals/meals.module';

@Module({
  imports: [
    FoodpacksModule,
    VotesModule,
    EmployeesModule,
    RestaurantModule,
    PrismaModule,
    MealsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
