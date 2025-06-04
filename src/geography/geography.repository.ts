import { InjectRepository } from '@nestjs/typeorm';
import { Geography } from './geography.entity';
import { Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { GeographyCreateDTO } from './dtos/geography-create.dto';
import { GeographyUpdateDTO } from './dtos/geography-update.dto';

@Injectable()
export class GeographyRepository {
  constructor(
    @InjectRepository(Geography)
    private readonly geographyReposity: Repository<Geography>,
  ) {}

  async findAllGeography(): Promise<Geography[]> {
    return this.geographyReposity.find();
  }

  async findById(id: number): Promise<Geography | null> {
    const geography = await this.geographyReposity.findOne({ where: { id } });

    if (!geography) {
      throw new NotFoundException('The geography not found');
    }

    return geography;
  }

  async findByCommunityId(id: number): Promise<Geography[]> {
    return this.geographyReposity.find({ where: { community: { id } } });
  }

  async createGeography(geography: GeographyCreateDTO): Promise<Geography> {
    this.geographyReposity.create(geography);
    return await this.geographyReposity.save(geography);
  }

  async updateGeography(
    id: number,
    geography: GeographyUpdateDTO,
  ): Promise<Geography> {
    const newGeography = await this.geographyReposity.preload({
      id,
      ...geography,
    });

    if (!newGeography) {
      throw new NotFoundException(`Geography not found`);
    }

    return this.geographyReposity.save(newGeography);
  }

  async deleteGeography(id: number): Promise<void> {
    await this.geographyReposity.delete(id);
  }
}
