import { InjectRepository } from '@nestjs/typeorm';
import { Population } from './population.entity';
import { Repository } from 'typeorm';
import { PopulationUpdateDTO } from './dtos/population-update.dto';
import { CreatePopulationDTO } from './dtos/population-create.dto';
import { NotFoundException } from '@nestjs/common';

export class PopulationRepository {
  constructor(
    @InjectRepository(Population)
    private readonly populationRepository: Repository<Population>,
  ) {}

  async findAllPopulation(): Promise<Population[]> {
    return this.populationRepository.find();
  }

  async findPopulationByCommunityId(id: number): Promise<Population[]> {
    return this.populationRepository.find({ where: { community: { id } } });
  }

  async createPopulation(population: CreatePopulationDTO): Promise<Population> {
    this.populationRepository.create(population);
    return await this.populationRepository.save(population);
  }

  async updatePopulation(
    id: number,
    population: PopulationUpdateDTO,
  ): Promise<Population> {
    const newPopulation = await this.populationRepository.preload({
      id,
      ...population,
    });

    if (!newPopulation) {
      throw new NotFoundException(`Population not found`);
    }

    return this.populationRepository.save(newPopulation);
  }

  async deletePopulation(id: number): Promise<void> {
    await this.populationRepository.delete(id);
  }
}
