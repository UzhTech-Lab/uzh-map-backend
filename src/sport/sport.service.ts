import { Injectable, NotFoundException } from '@nestjs/common';
import { SportRepository } from './sport.repository';
import { SportCreateDTO } from './dtos/create-sport.dto';
import { SportUpdateDTO } from './dtos/update-sport.dto';
import { Sport } from './sport.entity';

@Injectable()
export class SportService {
  constructor(private readonly sportRepo: SportRepository) {}

  async getById(id: number): Promise<Sport> {
    const sport = await this.sportRepo.findById(id);
    if (!sport) {
      throw new NotFoundException('Sport record not found');
    }
    return sport;
  }

  async createSport(data: SportCreateDTO): Promise<Sport> {
    return this.sportRepo.create(data);
  }

  async updateSport(id: number, data: SportUpdateDTO): Promise<Sport> {
    return this.sportRepo.update(id, data);
  }

  async deleteSport(id: number): Promise<void> {
    return this.sportRepo.delete(id);
  }
}
