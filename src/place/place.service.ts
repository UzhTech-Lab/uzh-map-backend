import { Injectable } from '@nestjs/common';
import { PlaceRepository } from './place.repository';
import { Place } from './place.entity';
import { CreatePlaceDto } from './dtos/create-place.dto';
import { UpdatePlaceDto } from './dtos/update-place.dto';

@Injectable()
export class PlaceService {
  constructor(private readonly placeRepo: PlaceRepository) {}

  getAll(): Promise<Place[]> {
    return this.placeRepo.findAll();
  }

  getByCommunityId(id: number): Promise<Place[]> {
    return this.placeRepo.findByCommunityId(id);
  }

  getById(id: number): Promise<Place | null> {
    return this.placeRepo.findById(id);
  }

  post(createDTO: CreatePlaceDto): Promise<Place> {
    return this.placeRepo.create(createDTO);
  }

  update(id: number, updateDTO: UpdatePlaceDto): Promise<Place | null> {
    return this.placeRepo.update(id, updateDTO);
  }

  delete(id: number): Promise<void> {
    return this.placeRepo.delete(id);
  }
}
