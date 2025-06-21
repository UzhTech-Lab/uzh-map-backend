import { Test, TestingModule } from '@nestjs/testing';
import { ArgicultureController } from './agriculture.controller';
import { AgricultureService } from './agriculture.service';
import {
  agricultures,
  agricultureCreateDTO,
} from '../assets/enums/data/mock.data.agriculture';

describe('ArgicultureController', () => {
  let controller: ArgicultureController;

  const mockService = {
    getArgicultureByCommunityId: jest.fn(),
    getArgicultureById: jest.fn(),
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

  it('should return agriculture place by it`s id', async () => {
    const id = 1;
    const agriculture = agricultures.find(
      (agriculture) => agriculture.id == id,
    );
    mockService.getArgicultureById.mockResolvedValue(agriculture);

    const res = await controller.getAgricultureById(id);

    expect(res).toEqual(agriculture);
  });

  it('should create an agriculture place', async () => {
    const newPlace = {
      id: 5,
      ...agricultureCreateDTO,
    };

    mockService.createArgiculture.mockResolvedValue(newPlace);

    const res = await controller.postArgiculture(agricultureCreateDTO);
    expect(res).toHaveProperty('id');
    expect(mockService.createArgiculture).toHaveBeenCalledWith(
      agricultureCreateDTO,
    );
  });

  it('should update agriculture place', async () => {
    const id = 1;
    const updateDTO = {
      details: 'new details',
    };

    const updatedPlace = {
      ...agricultures.find((a) => a.id == id),
      ...updateDTO,
    };

    mockService.updateAgriculture.mockResolvedValue(updatedPlace);

    const res = await controller.patchArgiculture(id, updateDTO);
    expect(res?.details).toEqual(updateDTO.details);
    expect(mockService.updateAgriculture).toHaveBeenCalledWith(id, updateDTO);
  });

  it('should delete agriculture place', async () => {
    const id = 1;
    const expectedMessage = 'Agriculture data deleted';
    mockService.deleteArgiculture.mockReturnValue(expectedMessage);

    const res = await controller.deleteArgiculture(id);
    expect(res).toEqual(expectedMessage);
    expect(mockService.deleteArgiculture).toHaveBeenCalledWith(id);
  });
});
