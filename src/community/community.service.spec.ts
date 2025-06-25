import { Test, TestingModule } from '@nestjs/testing';
import { CommunityService } from './community.service';
import { CommunityRepository } from './community.repository';
import { GeographyRepository } from '../geography/geography.repository';
import { PopulationRepository } from '../population/population.repository';
import { EconomyRepository } from '../economy/economy.repository';
import { InfrastructureRepository } from '../infrastructure/infrastructure.repository';
import { AgricultureRepository } from '../argiculture/agriculture.repository';
import { EducationRepository } from '../education/education.repository';
import {
  communities,
  createDTO,
  createFullDTO,
} from '../assets/data/mock.data.commuity';

describe('CommunityService', () => {
  let service: CommunityService;

  const mockCommunityData = {
    findAll: jest.fn(),
    find: jest.fn(),
    getNames: jest.fn(),
    findById: jest.fn(),
    createCommunity: jest.fn(),
    updateCommunity: jest.fn(),
    deleteCommunity: jest.fn(),
  };

  const mockRepo = {
    create: jest.fn(),
    save: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommunityService,
        { provide: CommunityRepository, useValue: mockCommunityData },
        { provide: GeographyRepository, useValue: mockRepo },
        { provide: PopulationRepository, useValue: mockRepo },
        { provide: EconomyRepository, useValue: mockRepo },
        { provide: InfrastructureRepository, useValue: mockRepo },
        { provide: AgricultureRepository, useValue: mockRepo },
        { provide: EducationRepository, useValue: mockRepo },
      ],
    }).compile();

    service = module.get<CommunityService>(CommunityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all communities', async () => {
    mockCommunityData.findAll.mockReturnValue(communities);

    const res = await service.findAll();

    expect(res).toEqual(communities);
    expect(mockCommunityData.findAll).toHaveBeenCalled();
  });

  it('should return the list with the names of communities', async () => {
    mockCommunityData.find.mockResolvedValue(communities);

    const communitiesNames = communities.map((community) => ({
      id: community.id,
      name: community.name,
    }));

    const res = await service.getNames();
    expect(res).toEqual(communitiesNames);
    expect(mockCommunityData.find).toHaveBeenCalled();
  });

  it("should return the community by it's ID", async () => {
    const id = 1;
    const community = communities.find((community) => community.id === id);

    mockCommunityData.findById.mockResolvedValue(community);

    const res = await service.findById(id);

    expect(res).toEqual(community);
    expect(mockCommunityData.findById).toHaveBeenCalled();
  });

  it('should create the community', async () => {
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

    mockCommunityData.createCommunity.mockResolvedValue(newCommunity);

    const res = await service.create(createDTO);
    expect(res.name).toEqual(createDTO.name);
    expect(mockCommunityData.createCommunity).toHaveBeenCalled();
    expect(res.edrpou_code).toEqual(createDTO.edrpou_code);
    expect(res.region).toEqual(createDTO.region);
    expect(res.district).toEqual(createDTO.district);
    expect(res.center_settlement).toEqual(createDTO.center_settlement);
    expect(res.postal_index).toEqual(createDTO.postal_index);
    expect(res.email).toEqual(createDTO.email);
    expect(res.phone).toEqual(createDTO.phone);
    expect(res.phone).toEqual(createDTO.phone);
    expect(res.website).toEqual(createDTO.website);
    expect(res.history).toEqual(createDTO.history);
  });

  it('should create the community with all posible relations', async () => {
    const newCommunity = {
      id: 7,
      ...createFullDTO,
    };

    mockCommunityData.createCommunity.mockResolvedValue(newCommunity);

    const res = await service.create(createFullDTO);
    expect(res.name).toEqual(createFullDTO.name);
    expect(mockCommunityData.createCommunity).toHaveBeenCalledWith(
      createFullDTO,
    );
    expect(res).toHaveProperty('id');
  });

  it('should update community data and return new community', async () => {
    const updateDTO = {
      name: 'Updated community',
    };

    const id = 1;
    const updatedCommunity = {
      ...communities.find((c) => c.id === id),
      ...updateDTO,
    };

    mockCommunityData.updateCommunity.mockResolvedValue(updatedCommunity);

    const res = await service.update(id, updateDTO);
    expect(res).toEqual(updatedCommunity);
    expect(res.name).toBe(updateDTO.name);
    expect(mockCommunityData.updateCommunity).toHaveBeenCalledWith(
      id,
      updateDTO,
    );
  });

  it('should delete community by ID', async () => {
    const id = 1;
    const expectedMessage = { message: 'Community deleted' };

    mockCommunityData.deleteCommunity.mockResolvedValue(expectedMessage);

    const res = await service.delete(id);
    expect(res).toEqual(expectedMessage);
    expect(mockCommunityData.deleteCommunity).toHaveBeenCalledWith(id);
  });
});
