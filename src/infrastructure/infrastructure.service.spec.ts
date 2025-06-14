import { Test, TestingModule } from '@nestjs/testing';
import { InfrastructureService } from './infrastructure.service';
import { InfrastructureRepository } from './infrastructure.repository';

describe('InfrastructureService', () => {
  let service: InfrastructureService;

  const mockData = {
    findAllInfrastructures: jest.fn(),
    findInfrastructureByCommunityId: jest.fn(),
    findInfrastructureById: jest.fn(),
    createInfrastucture: jest.fn(),
    saveInfrastructure: jest.fn(),
    updateInfrastructure: jest.fn(),
    deleteInfrastructure: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        InfrastructureService,
        { provide: InfrastructureRepository, useValue: mockData },
      ],
    }).compile();

    service = module.get<InfrastructureService>(InfrastructureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
