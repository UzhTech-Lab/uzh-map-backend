import { Injectable, NotFoundException } from '@nestjs/common';
import { ReligionRepository } from './religion.repository';
import { Religion } from './religion.entity';
import { ReligionCreateDTO } from './dtos/create-religion.dto';
import { ReligionUpdateDTO } from './dtos/update-religion.dto';

@Injectable()
export class ReligionService {
  constructor(private readonly religionRepo: ReligionRepository) {}

  async getById(id: number): Promise<Religion> {
    const religion = await this.religionRepo.findById(id);
    if (!religion) {
      throw new NotFoundException('Religion record not found');
    }
    return religion;
  }

  async createReligion(religionData: ReligionCreateDTO): Promise<Religion> {
    return this.religionRepo.create(religionData);
  }

  async updateReligion(
    id: number,
    updateData: ReligionUpdateDTO,
  ): Promise<Religion> {
    return this.religionRepo.update(id, updateData);
  }

  async deleteReligion(id: number): Promise<void> {
    return this.religionRepo.delete(id);
  }
}
