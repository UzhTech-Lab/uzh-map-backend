import { Test, TestingModule } from '@nestjs/testing';
import { AgricultureService } from './agriculture.service';
import { AgricultureRepository } from './agriculture.repository';
import {
  agricultures,
  agricultureCreateDTO,
} from '../assets/enums/data/mock.data.agriculture';

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

  it('should return all agriculuture places', async () => {
    mockRepo.findAllAgricultures.mockResolvedValue(agricultures);

    const res = await service.getAllAgricultures();
    expect(res).toEqual(agricultures);
    expect(mockRepo.findAllAgricultures).toHaveBeenCalled();
  });

  it('should return the agriculture by the community', async () => {
    const id = 1;
    const agriculture = agricultures.map((a) => a.id == id);
    mockRepo.findAgriculturesByCommunityId.mockResolvedValue(agriculture);

    const res = await service.getArgicultureByCommunityId(id);
    expect(res).toEqual(agriculture);
    expect(mockRepo.findAgriculturesByCommunityId).toHaveBeenCalledWith(id);
  });

  it('should return the agriculture by id', async () => {
    const id = 1;
    const agriculture = agricultures.map((a) => a.id == id);
    mockRepo.findAgricultureById.mockResolvedValue(agriculture);

    const res = await service.getArgicultureById(id);
    expect(res).toEqual(agriculture);
    expect(mockRepo.findAgricultureById).toHaveBeenCalledWith(id);
  });

  it('should create an agriculture', async () => {
    const newArg = {
      id: 4,
      ...agricultureCreateDTO,
    };

    mockRepo.createAgriculture.mockResolvedValue(newArg);

    const res = await service.createArgiculture(agricultureCreateDTO);
    expect(res.name).toEqual(newArg.name);
    expect(res).toHaveProperty('id');
    expect(mockRepo.createAgriculture).toHaveBeenCalledWith(
      agricultureCreateDTO,
    );
  });

  it('should update agriculture that already exists', async () => {
    const id = 2;
    const updatedDTO = {
      name: 'Updated agriculture',
    };
    const updatedAgriculture = {
      ...agricultures.find((a) => a.id == id),
      ...updatedDTO,
    };

    mockRepo.updateAgriculture.mockResolvedValue(updatedAgriculture);

    const res = await service.updateAgriculture(id, updatedDTO);
    expect(res).toEqual(updatedAgriculture);
    expect(res?.name).toBe(updatedAgriculture.name || null);
    expect(mockRepo.updateAgriculture).toHaveBeenCalledWith(id, updatedDTO);
  });

  it('should delete agriculture by it`s id', async () => {
    const message = 'Agriculture data deleted';
    const id = 3;
    mockRepo.deleteArgiculture.mockResolvedValue(message);

    const res = await service.deleteArgiculture(id);

    expect(res).toEqual(message);
    expect(mockRepo.deleteArgiculture).toHaveBeenCalledWith(id);
  });
});
