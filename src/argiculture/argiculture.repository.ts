import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Argiculture } from './argiculture.entity';
import { Repository } from 'typeorm';
import { ArgicultureCreateDTO } from './dtos/argiculture-create.dto';
import { ArgicultureUpdateDTO } from './dtos/argiculture-update.dto';

@Injectable()
export class ArgicultureRepository {
  constructor(
    @InjectRepository(Argiculture)
    private readonly argicultureRepository: Repository<Argiculture>,
  ) {}

  async findAllArgicultures(): Promise<Argiculture[]> {
    return this.argicultureRepository.find();
  }

  async findArgiculturesByCommunityId(id: number): Promise<Argiculture[]> {
    return this.argicultureRepository.find({ where: { id: id } });
  }

  async findArgicultureById(id: number): Promise<Argiculture | null> {
    const argiculture = await this.argicultureRepository.findOne({
      where: { id },
    });

    return argiculture;
  }

  async createAgriculture(
    argiculture: ArgicultureCreateDTO,
  ): Promise<Argiculture> {
    this.argicultureRepository.create(argiculture);
    return this.argicultureRepository.save(argiculture);
  }

  async updateAgriculture(
    id: number,
    updateArgiculture: ArgicultureUpdateDTO,
  ): Promise<Argiculture> {
    const argiculture = await this.argicultureRepository.preload({
      id,
      ...updateArgiculture,
    });

    if (!argiculture) {
      throw new NotFoundException(`Argiculture with ID ${id} not found`);
    }

    return this.argicultureRepository.save(argiculture);
  }

  async deleteArgiculture(id: number): Promise<void> {
    await this.argicultureRepository.delete(id);
  }
}
