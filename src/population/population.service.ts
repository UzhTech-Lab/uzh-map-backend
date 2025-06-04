import { Injectable } from '@nestjs/common';
import { Population } from './population.entity';
import { CreatePopulationDTO } from './dtos/population-create.dto';
import { PopulationUpdateDTO } from './dtos/population-update.dto';

@Injectable()
export class PopulationService {
  constructor(private readonly populationService: PopulationService) {}

  async findAllPopulation(): Promise<Population[]> {
    return this.populationService.findAllPopulation();
  }

  async findPopulationByCommunityId(id: number): Promise<Population[]> {
    return this.populationService.findPopulationByCommunityId(id);
  }

  async createPopulation(population: CreatePopulationDTO): Promise<Population> {
    return this.populationService.createPopulation(population);
  }

  async updatePopulation(
    id: number,
    population: PopulationUpdateDTO,
  ): Promise<Population> {
    return this.populationService.updatePopulation(id, population);
  }

  async deletePopulation(id: number): Promise<void> {
    await this.populationService.deletePopulation(id);
  }
}
