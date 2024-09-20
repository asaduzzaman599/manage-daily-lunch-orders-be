import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  DefaultValuePipe,
} from '@nestjs/common';
import { VotesService } from './votes.service';
import { CreateVoteDto } from './dto/create-vote.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';
import { ArgsVoteDto } from './dto/args-vote.dto'

@Controller('votes')
export class VotesController {
  constructor(private readonly votesService: VotesService) {}

  @Post()
  create(@Body() createVoteDto: CreateVoteDto) {
    return this.votesService.create(createVoteDto);
  }

  @Get()
  findAll(
    @Query('employeeId') employeeId: string,
    @Query('foodPackId') foodPackId: string,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    const query: ArgsVoteDto = {};
    if (employeeId) query.employeeId = employeeId;
    if (foodPackId) query.foodPackId = foodPackId;

    return this.votesService.findAll(query);
  }

  @Get('/top-voted')
  async findTopVoted() {
    return await this.votesService.findTopVoted();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.votesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVoteDto: UpdateVoteDto) {
    return this.votesService.update(+id, updateVoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.votesService.remove(id);
  }
}
