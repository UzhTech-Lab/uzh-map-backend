import { Test, TestingModule } from '@nestjs/testing';
import { AgricultureService } from './agriculture.service';
import { AgricultureRepository } from './agriculture.repository';

describe('ArgicultureService', () => {
  let service: AgricultureService;

  const mockRepo = {
    findAgriculturesByCommunityId: jest.fn(),
    findAgricultureById: jest.fn(),
    findAllAgricultures: jest.fn(),
    createAgriculture: jest.fn(),
    updateAgriculture: jest.fn(),
    deleteArgiculture: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AgricultureService,
        {
          provide: AgricultureRepository,
          useValue: mockRepo,
        },
      ],
    }).compile();

    service = module.get<AgricultureService>(AgricultureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
