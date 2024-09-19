import { Test, TestingModule } from '@nestjs/testing';
import { FoodpacksController } from './foodpacks.controller';
import { FoodpacksService } from './foodpacks.service';

describe('FoodpacksController', () => {
  let controller: FoodpacksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FoodpacksController],
      providers: [FoodpacksService],
    }).compile();

    controller = module.get<FoodpacksController>(FoodpacksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
