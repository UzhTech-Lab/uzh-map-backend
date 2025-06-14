import { Test, TestingModule } from '@nestjs/testing';
import { PopulationController } from './population.controller';
import { PopulationService } from './population.service';

describe('PopulationController', () => {
  let controller: PopulationController;

  const mockData = {
    findAllPopulation: jest.fn(),
    findPopulationByCommunityId: jest.fn(),
    findPopulationById: jest.fn(),
    createPopulation: jest.fn(),
    updatePopulation: jest.fn(),
    deletePopulation: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PopulationController],
      providers: [{ provide: PopulationService, useValue: mockData }],
    }).compile();

    controller = module.get<PopulationController>(PopulationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
