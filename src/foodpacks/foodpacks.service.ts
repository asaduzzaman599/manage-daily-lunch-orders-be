import { Injectable } from '@nestjs/common';
import { CreateFoodpackDto } from './dto/create-foodpack.dto';
import { UpdateFoodpackDto } from './dto/update-foodpack.dto';
import { PrismaService } from 'src/prisma.service';
import { VotesService } from 'src/votes/votes.service';

@Injectable()
export class FoodpacksService {
  constructor(
    private prisma: PrismaService,
    private votesService: VotesService,
  ) {}
  create(createFoodpackDto: CreateFoodpackDto) {
    return this.prisma.foodPack.create({ data: createFoodpackDto });
  }

  findAll() {
    return this.prisma.foodPack.findMany({
      include: {
        restaurant: true,
        foodPackWithMeal: { include: { meal: true } },
      },
    });
  }

  findOne(id: string) {
    return this.prisma.foodPack.findUnique({
      where: { id },
      include: { restaurant: true, foodPackWithMeal: true },
    });
  }

  update(id: number, updateFoodpackDto: UpdateFoodpackDto) {
    return `This action updates a #${id} foodpack`;
  }

  remove(id: number) {
    return `This action removes a #${id} foodpack`;
  }

  async topVotedFoodItem() {
    const top = await this.votesService.findTopVoted();
    if (!top) {
      return null;
    }
    const foodPack = await this.findOne(top.foodPackId);

    return {
      foodPack,
      voteCount: top?._count?.foodPackId ?? 0,
    };
  }
}
