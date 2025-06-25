import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sport } from './sport.entity';

@Injectable()
export class SportRepository {
  constructor(
    @InjectRepository(Sport)
    private readonly sportRepo: Repository<Sport>,
  ) {}

  async findById(id: number): Promise<Sport | null> {
    return this.sportRepo.findOne({ where: { id } });
  }

  async create(data: Partial<Sport>): Promise<Sport> {
    const sport = this.sportRepo.create(data);
    return this.sportRepo.save(sport);
  }

  async update(id: number, data: Partial<Sport>): Promise<Sport> {
    const sport = await this.findById(id);
    if (!sport) {
      throw new NotFoundException('Sport record not found');
    }
    Object.assign(sport, data);
    return this.sportRepo.save(sport);
  }

  async save(sport: Sport): Promise<Sport> {
    return await this.sportRepo.save(sport);
  }

  async delete(id: number): Promise<void> {
    await this.sportRepo.delete(id);
  }
}
