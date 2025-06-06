import {
  BadRequestException,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { PopulationService } from './population.service';
import { Population } from './population.entity';
import { CreatePopulationDTO } from './dtos/population-create.dto';
import { PopulationUpdateDTO } from './dtos/population-update.dto';

@Controller('api/v1/population')
export class PopulationController {
  constructor(private readonly populationService: PopulationService) {}

  @Get('/:id')
  async getPopulationByCommunityId(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Population[]> {
    try {
      return this.populationService.findPopulationByCommunityId(id);
    } catch (error) {
      throw new BadRequestException(
        error.message || 'Error during getting population',
      );
    }
  }

  @Post()
  async createPopulation(population: CreatePopulationDTO): Promise<Population> {
    try {
      return this.populationService.createPopulation(population);
    } catch (error) {
      throw new BadRequestException(
        error.message || 'Error during creating population',
      );
    }
  }

  @Patch('/:id')
  async updatePopulation(
    @Param('id', ParseIntPipe) id: number,
    population: PopulationUpdateDTO,
  ): Promise<Population | null> {
    try {
      return this.populationService.updatePopulation(id, population);
    } catch (error) {
      throw new BadRequestException(
        error.message || 'Error during updating population',
      );
    }
  }

  @Delete('/:id')
  async deletePopulation(@Param('id', ParseIntPipe) id: number): Promise<void> {
    try {
      return this.deletePopulation(id);
    } catch (error) {
      throw new BadRequestException(
        error.message || 'Error during deleting population',
      );
    }
  }
}
