import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma.module';
import { FoodpacksController } from './foodpacks.controller';
import { FoodpacksService } from './foodpacks.service';

@Module({
  imports: [PrismaModule],
  controllers: [FoodpacksController],
  providers: [FoodpacksService],
})
export class FoodpacksModule {}
