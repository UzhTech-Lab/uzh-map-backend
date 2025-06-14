import { Test, TestingModule } from '@nestjs/testing';
import { InfrastructureController } from './infrastructure.controller';
import { InfrastructureService } from './infrastructure.service';

describe('InfrastructureController', () => {
  let controller: InfrastructureController;

  const mockData = {
    getAllInfrastructures: jest.fn(),
    getInfrastructureById: jest.fn(),
    getInfrastructureByCommunityId: jest.fn(),
    createInfrastructure: jest.fn(),
    updateInfrastructure: jest.fn(),
    deleteInfrastructure: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InfrastructureController],
      providers: [{ provide: InfrastructureService, useValue: mockData }],
    }).compile();

    controller = module.get<InfrastructureController>(InfrastructureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
