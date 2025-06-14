import { Test, TestingModule } from '@nestjs/testing';
import { GeographyService } from './geography.service';
import { GeographyRepository } from './geography.repository';

describe('GeographyService', () => {
  let service: GeographyService;

  const mockRepo = {
    findAllGeography: jest.fn(),
    findById: jest.fn(),
    findByCommunityId: jest.fn(),
    createGeography: jest.fn(),
    saveGeography: jest.fn(),
    updateGeography: jest.fn(),
    deleteGeography: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GeographyService,
        {
          provide: GeographyRepository,
          useValue: mockRepo,
        },
      ],
    }).compile();

    service = module.get<GeographyService>(GeographyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
