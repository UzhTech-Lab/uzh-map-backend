import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Community } from './community.entity';
import { CommunityCreateDTO } from './dtos/community-create.dto';
import { CommunityUpdateDTO } from './dtos/community-update.dto';
import { GetCommunityDTO } from './dtos/get-community.dto';

@Injectable()
export class CommunityRepository {
  constructor(
    @InjectRepository(Community)
    private readonly repo: Repository<Community>,
  ) {}

  findAll(): Promise<Community[]> {
    return this.repo.find({
      relations: {
        geography: true,
        population: true,
        economy: true,
        infrastructure: true,
        keyPlaces: true,
        argiculture: true,
        education: true,
        religion: true,
        sport: true,
        transport: true,
      },
    });
  }

  find(): Promise<Community[]> {
    return this.repo.find();
  }

  async findShortInfoById(id: number): Promise<GetCommunityDTO> {
    const community = await this.repo.findOne({
      where: { id },
      relations: {
        keyPlaces: true,
      },
    });
    if (!community) throw new NotFoundException('Community not found');

    const shortInfo = {
      id: community.id,
      name: community.name,
      edrpou_code: community.edrpou_code,
      region: community.region,
      population_amount: community.population_amount,
      established: community.established,
      area_km2: community.area_km2,
      district: community.district,
      center_settlement: community.center_settlement,
      center: community.center,
      settlements: community.settlements,
      keyPlaces: community.keyPlaces,
    };
    return shortInfo;
  }

  async findById(id: number): Promise<Community> {
    const community = await this.repo.findOne({
      where: { id },
      relations: {
        geography: true,
        population: true,
        economy: true,
        infrastructure: true,
        keyPlaces: true,
        argiculture: true,
        education: true,
        religion: true,
        sport: true,
        transport: true,
      },
    });
    if (!community) throw new NotFoundException('Community not found');
    return community;
  }

  async createCommunity(dto: CommunityCreateDTO): Promise<Community> {
    const community = this.repo.create(dto);
    return this.repo.save(community);
  }

  async updateCommunity(
    id: number,
    dto: CommunityUpdateDTO,
  ): Promise<Community> {
    const community = await this.repo.preload({ id, ...dto });
    if (!community) throw new NotFoundException('Community not found');
    return this.repo.save(community);
  }

  async deleteCommunity(id: number): Promise<void> {
    const result = await this.repo.delete(id);
    if (result.affected === 0)
      throw new NotFoundException('Community not found');
  }
}
