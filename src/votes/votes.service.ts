import { Injectable } from '@nestjs/common';
import { CreateVoteDto } from './dto/create-vote.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class VotesService {
  constructor(private prisma: PrismaService) {}
  create(createVoteDto: CreateVoteDto) {
    return this.prisma.vote.create({
      data: createVoteDto,
    });
  }

  findAll() {
    return this.prisma.vote.findMany({
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

  update(id: number, updateVoteDto: UpdateVoteDto) {
    return `This action updates a #${id} vote`;
  }

  remove(id: number) {
    return `This action removes a #${id} vote`;
  }
}
