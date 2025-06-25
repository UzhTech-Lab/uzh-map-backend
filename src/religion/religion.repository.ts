import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Religion } from './religion.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Community } from 'src/community/community.entity';

@Injectable()
export class ReligionRepository {
  constructor(
    @InjectRepository(Religion)
    private readonly religionRepo: Repository<Religion>,
  ) {}

  async findById(id: number): Promise<Religion | null> {
    return this.religionRepo.findOne({ where: { id } });
  }

  async findByCommunity(community: Community): Promise<Religion | null> {
    return this.religionRepo.findOne({ where: { community } });
  }

  async create(religion: Partial<Religion>): Promise<Religion> {
    const newReligion = this.religionRepo.create(religion);
    return this.religionRepo.save(newReligion);
  }

  async update(id: number, data: Partial<Religion>): Promise<Religion> {
    const religion = await this.findById(id);
    if (!religion) {
      throw new NotFoundException('Religion not found');
    }
    Object.assign(religion, data);
    return this.religionRepo.save(religion);
  }

  async save(religion: Religion): Promise<Religion> {
    return await this.religionRepo.save(religion);
  }

  async delete(id: number): Promise<void> {
    await this.religionRepo.delete(id);
  }
}
