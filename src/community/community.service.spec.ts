import { Test, TestingModule } from '@nestjs/testing';
import { CommunityService } from './community.service';
import { CommunityRepository } from './community.repository';
import { GeographyRepository } from '../geography/geography.repository';
import { PopulationRepository } from '../population/population.repository';
import { EconomyRepository } from '../economy/economy.repository';
import { InfrastructureRepository } from '../infrastructure/infrastructure.repository';
import { AgricultureRepository } from '../argiculture/agriculture.repository';
import { EducationRepository } from '../education/education.repository';

describe('CommunityService', () => {
  let service: CommunityService;

  const mockData = {
    findAll: jest.fn(),
    find: jest.fn(),
    findById: jest.fn(),
    createCommunity: jest.fn(),
    updateCommunity: jest.fn(),
    deleteCommunity: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommunityService,
        { provide: CommunityRepository, useValue: mockData },
        { provide: GeographyRepository, useValue: {} },
        { provide: PopulationRepository, useValue: {} },
        { provide: EconomyRepository, useValue: {} },
        { provide: InfrastructureRepository, useValue: {} },
        { provide: AgricultureRepository, useValue: {} },
        { provide: EducationRepository, useValue: {} },
      ],
    }).compile();

    service = module.get<CommunityService>(CommunityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all communities', async () => {
    const communities = [{ id: 1, name: 'test' }];
    mockData.findAll.mockReturnValue(communities);

    const res = await service.findAll();

    expect(res).toEqual(communities);
    expect(mockData.findAll).toHaveBeenCalled();
  });
});
