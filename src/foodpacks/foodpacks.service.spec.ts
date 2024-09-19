import { Test, TestingModule } from '@nestjs/testing';
import { FoodpacksService } from './foodpacks.service';

describe('FoodpacksService', () => {
  let service: FoodpacksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FoodpacksService],
    }).compile();

    service = module.get<FoodpacksService>(FoodpacksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
