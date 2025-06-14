import { Test, TestingModule } from '@nestjs/testing';
import { EconomyService } from './economy.service';
import { EconomyRepository } from './economy.repository';

describe('EconomyService', () => {
  let service: EconomyService;

  const mockData = {
    findAllEconomy: jest.fn(),
    findEconomyByCommunityId: jest.fn(),
    findEconomyById: jest.fn(),
    createEconomy: jest.fn(),
    saveEconomy: jest.fn(),
    updateEconomy: jest.fn(),
    deleteEconomy: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EconomyService,
        { provide: EconomyRepository, useValue: mockData },
      ],
    }).compile();

    service = module.get<EconomyService>(EconomyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
