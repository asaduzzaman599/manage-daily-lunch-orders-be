import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma.module';
import { VotesModule } from 'src/votes/votes.module';
import { FoodpacksController } from './foodpacks.controller';
import { FoodpacksService } from './foodpacks.service';

@Module({
  imports: [PrismaModule, VotesModule],
  controllers: [FoodpacksController],
  providers: [FoodpacksService],
  exports: [FoodpacksService],
})
export class FoodpacksModule {}
