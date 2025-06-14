import { Test, TestingModule } from '@nestjs/testing';
import { EducationService } from './education.service';
import { EducationRepository } from './education.repository';

describe('EducationService', () => {
  let service: EducationService;

  const mockData = {
    findAllPlaces: jest.fn(),
    findById: jest.fn(),
    findByCommunityId: jest.fn(),
    createEducationPlace: jest.fn(),
    saveEducationPlace: jest.fn(),
    updateEducationPlace: jest.fn(),
    deleteEducationPlace: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EducationService,
        { provide: EducationRepository, useValue: mockData },
      ],
    }).compile();

    service = module.get<EducationService>(EducationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
