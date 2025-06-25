import { InjectRepository } from '@nestjs/typeorm';
import { Place } from './place.entity';
import { Repository } from 'typeorm';
import { CommunityRepository } from 'src/community/community.repository';
import { CreatePlaceDto } from './dtos/create-place.dto';
import { UpdatePlaceDto } from './dtos/update-place.dto';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class PlaceRepository {
  constructor(
    @InjectRepository(Place)
    private readonly placeRepo: Repository<Place>,

    private readonly communityRepo: CommunityRepository,
  ) {}

  async findAll(): Promise<Place[]> {
    return this.placeRepo.find();
  }

  async findById(id: number): Promise<Place | null> {
    return this.placeRepo.findOne({ where: { id } });
  }

  async findByCommunityId(communityId: number): Promise<Place[]> {
    const community = await this.communityRepo.findById(communityId);

    if (!community) {
      throw new NotFoundException('Community not found');
    }

    return await this.placeRepo.find({
      where: { community_id: communityId },
    });
  }

  async create(createDTO: CreatePlaceDto): Promise<Place> {
    const community = await this.communityRepo.findById(createDTO.community_id);

    if (!community) {
      throw new NotFoundException('Community not found');
    }

    const place = this.placeRepo.create({
      ...createDTO,
      community,
    });

    return await this.placeRepo.save(place);
  }

  async update(id: number, updateDTO: UpdatePlaceDto): Promise<Place | null> {
    const place = await this.findById(id);

    if (!place) {
      throw new NotFoundException('Place not found');
    }

    let community = place.community;

    if (
      updateDTO.community_id &&
      updateDTO.community_id !== place.community_id
    ) {
      community = await this.communityRepo.findById(updateDTO.community_id);
      if (!community) {
        throw new NotFoundException('New community not found');
      }
    }

    await this.placeRepo.update(id, {
      ...updateDTO,
      community,
    });

    return await this.placeRepo.findOne({ where: { id } });
  }

  async save(place: Place): Promise<Place> {
    return this.placeRepo.save(place);
  }

  async delete(id: number): Promise<void> {
    await this.placeRepo.delete(id);
  }
}
