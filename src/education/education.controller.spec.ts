import { Test, TestingModule } from '@nestjs/testing';
import { EducationController } from './education.controller';
import { EducationService } from './education.service';

describe('EducationController', () => {
  let controller: EducationController;

  const mockData = {
    getAllEducationPlaces: jest.fn(),
    getEducationPlaces: jest.fn(),
    getPlaceById: jest.fn(),
    createEducationPlace: jest.fn(),
    updateEducationPlace: jest.fn(),
    deleteEducationPlace: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EducationController],
      providers: [{ provide: EducationService, useValue: mockData }],
    }).compile();

    controller = module.get<EducationController>(EducationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
