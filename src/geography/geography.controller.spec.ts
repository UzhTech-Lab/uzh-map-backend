import { Test, TestingModule } from '@nestjs/testing';
import { GeographyController } from './geography.controller';
import { GeographyService } from './geography.service';

describe('GeographyController', () => {
  let controller: GeographyController;

  const mockService = {
    getGeographyById: jest.fn(),
    getGeographyByCommunityId: jest.fn(),
    getGeography: jest.fn(),
    createGeography: jest.fn(),
    updateGeography: jest.fn(),
    deleteGeography: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeographyController],
      providers: [{ provide: GeographyService, useValue: mockService }],
    }).compile();

    controller = module.get<GeographyController>(GeographyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
