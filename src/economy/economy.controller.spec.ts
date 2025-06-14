import { Test, TestingModule } from '@nestjs/testing';
import { EconomyController } from './economy.controller';
import { EconomyService } from './economy.service';

describe('EconomyController', () => {
  let controller: EconomyController;

  const mockData = {
    getAllEconomy: jest.fn(),
    getEconomyById: jest.fn(),
    getEconomyByCommunityId: jest.fn(),
    createEconomy: jest.fn(),
    updateEconomy: jest.fn(),
    deleteEconomy: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EconomyController],
      providers: [{ provide: EconomyService, useValue: mockData }],
    }).compile();

    controller = module.get<EconomyController>(EconomyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
