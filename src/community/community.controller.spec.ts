import { Test, TestingModule } from '@nestjs/testing';
import { CommunityController } from './community.controller';
import { CommunityService } from './community.service';
import {
  communities,
  createDTO,
  createFullDTO,
} from '../assets/enums/data/mock.data.commuity';

describe('CommunityController', () => {
  let controller: CommunityController;

  const mockData = {
    findAll: jest.fn(),
    getNames: jest.fn(),
    findById: jest.fn(),
    create: jest.fn(),
    createFullCommunity: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommunityController],
      providers: [
        {
          provide: CommunityService,
          useValue: mockData,
        },
      ],
    }).compile();

    controller = module.get<CommunityController>(CommunityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return the data of communities', async () => {
    mockData.findAll.mockResolvedValue(communities);

    const res = await controller.findAll();

    expect(res).toEqual(communities);
    expect(mockData.findAll).toHaveBeenCalled();
  });

  it("should return the list of communities' names", async () => {
    const names = communities.map((community) => ({
      id: community.id,
      name: community.name,
    }));

    mockData.getNames.mockResolvedValue(names);

    const res = await controller.getCommunityList();

    expect(res).toEqual(names);
    expect(mockData.getNames).toHaveBeenCalled();
  });

  it('should create community', async () => {
    const newCommunity = {
      id: 8,
      ...createDTO,
      argiculture_places: [],
      economy: {},
      education_places: [],
      geography: [],
      infrastructure: {},
      population: {},
    };

    mockData.create.mockResolvedValue(newCommunity);

    const res = await controller.create(createDTO);
    expect(res.name).toEqual(createDTO.name);
    expect(mockData.create).toHaveBeenCalled();
  });

  it('should create community with all info including population, economy, ect...', async () => {
    const newCommunity = {
      id: 3,
      ...createFullDTO,
    };

    mockData.createFullCommunity.mockResolvedValue(newCommunity);

    const res = await controller.createFullCommunity(createFullDTO);
    expect(res!.name).toEqual(createFullDTO.name || null);
    expect(mockData.createFullCommunity).toHaveBeenCalledWith(createFullDTO);
    expect(res).toHaveProperty('id');
  });

  it('should update community that exists', async () => {
    const updateDTO = {
      region: 'Updated region',
    };

    const id = 1;
    const updatedCommunity = {
      ...communities.find((c) => c.id === id),
      ...updateDTO,
    };

    mockData.update.mockResolvedValue(updatedCommunity);

    const res = await controller.update(id, updateDTO);
    expect(res).toEqual(updatedCommunity);
    expect(res.region).toEqual(updateDTO.region);
    expect(mockData.update).toHaveBeenCalledWith(id, updateDTO);
  });

  it('should deleete community by id', async () => {
    const id = 1;
    const expectedMessage = { message: 'Community deleted' };

    mockData.delete.mockResolvedValue(expectedMessage);
    const res = await controller.remove(id);

    expect(res).toEqual(expectedMessage);
    expect(mockData.delete).toHaveBeenCalledWith(id);
  });
});
