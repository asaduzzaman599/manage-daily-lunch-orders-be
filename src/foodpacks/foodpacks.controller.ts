import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateFoodpackDto } from './dto/create-foodpack.dto';
import { UpdateFoodpackDto } from './dto/update-foodpack.dto';
import { FoodpacksService } from './foodpacks.service';

@Controller('foodpacks')
export class FoodpacksController {
  constructor(private readonly foodpacksService: FoodpacksService) {}

  @Post()
  create(@Body() createFoodpackDto: CreateFoodpackDto) {
    return this.foodpacksService.create(createFoodpackDto);
  }

  @Get()
  findAll() {
    return this.foodpacksService.findAll();
  }

  @Get('/top-voted')
  findTopVotedFoodItem() {
    return this.foodpacksService.topVotedFoodItem();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foodpacksService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFoodpackDto: UpdateFoodpackDto,
  ) {
    return this.foodpacksService.update(+id, updateFoodpackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.foodpacksService.remove(+id);
  }
}
