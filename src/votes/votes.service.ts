import { Injectable } from '@nestjs/common';
import { CreateVoteDto } from './dto/create-vote.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';
import { PrismaService } from 'src/prisma.service';
import { endOfDay, previousDay, startOfDay, startOfYesterday } from 'date-fns';
import { count } from 'console';
import { ArgsVoteDto } from './dto/args-vote.dto';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class VotesService {
  constructor(private prisma: PrismaService) {}
  async create(createVoteDto: CreateVoteDto) {
    const today = new Date();
    const exist = await this.prisma.vote.findFirst({
      where: {
        employeeId: createVoteDto.employeeId,
        foodPackId: createVoteDto.foodPackId,
        AND: [
          { createdAt: { gte: startOfDay(today) } }, //startOfYesterday()
          { createdAt: { lt: endOfDay(today) } }, //startOfDay(today)
        ],
      },
    });
    console.log({ exist });
    if (exist) throw new Error('You already voted once for today');
    return this.prisma.vote.create({
      data: createVoteDto,
    });
  }

  findAll(args: ArgsVoteDto) {
    const { startDate, endDate, ...query } = args;
    const customQuery: Prisma.VoteWhereInput = query;
    if (startDate && endDate) {
      customQuery.createdAt = {
        gte: new Date(startDate),
        lte: new Date(endDate),
      };
    }
    return this.prisma.vote.findMany({
      where: customQuery,
      include: {
        employee: true,
        foodPack: {
          include: { restaurant: true },
        },
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} vote`;
  }

  async findTopVoted() {
    const today = new Date();
    const [result] = await this.prisma.vote.groupBy({
      where: {
        AND: [
          { createdAt: { gte: startOfDay(today) } }, //startOfYesterday()
          { createdAt: { lt: endOfDay(today) } }, //startOfDay(today)
        ],
      },
      by: ['foodPackId'],
      _count: {
        foodPackId: true,
      },
      orderBy: {
        _count: {
          foodPackId: 'desc',
        },
      },
      take: 1,
    });
    return result ?? null;
  }

  update(id: number, updateVoteDto: UpdateVoteDto) {
    return `This action updates a #${id} vote`;
  }

  remove(id: string) {
    return this.prisma.vote.delete({ where: { id } });
  }
}
