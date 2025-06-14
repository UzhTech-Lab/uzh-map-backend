import { Test, TestingModule } from '@nestjs/testing';
import { ArgicultureController } from './agriculture.controller';
import { AgricultureService } from './agriculture.service';

describe('ArgicultureController', () => {
  let controller: ArgicultureController;

  const mockService = {
    getArgicultureByCommunityId: jest.fn(),
    getArgicultureById: jest.fn(),
    getAllAgricultures: jest.fn(),
    createArgiculture: jest.fn(),
    updateAgriculture: jest.fn(),
    deleteArgiculture: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArgicultureController],
      providers: [{ provide: AgricultureService, useValue: mockService }],
    }).compile();

    controller = module.get<ArgicultureController>(ArgicultureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
