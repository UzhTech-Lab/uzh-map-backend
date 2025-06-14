import { Test, TestingModule } from '@nestjs/testing';
import { PopulationService } from './population.service';
import { PopulationRepository } from './population.repository';

describe('PopulationService', () => {
  let service: PopulationService;

  const mockData = {
    findAllPopulation: jest.fn(),
    findPopulationByCommunityId: jest.fn(),
    findPopulationById: jest.fn(),
    createPopulation: jest.fn(),
    savePopulation: jest.fn(),
    updatePopulation: jest.fn(),
    deletePopulation: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PopulationService,
        {
          provide: PopulationRepository,
          useValue: mockData,
        },
      ],
    }).compile();

    service = module.get<PopulationService>(PopulationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
