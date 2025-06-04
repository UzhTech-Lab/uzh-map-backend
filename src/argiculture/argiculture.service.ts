import { Injectable } from '@nestjs/common';
import { ArgicultureRepository } from './argiculture.repository';
import { Argiculture } from './argiculture.entity';
import { ArgicultureCreateDTO } from './dtos/argiculture-create.dto';
import { ArgicultureUpdateDTO } from './dtos/argiculture-update.dto';

@Injectable()
export class ArgicultureService {
  constructor(private readonly argicultureRepository: ArgicultureRepository) {}

  async getArgicultureByCommunityId(id: number): Promise<Argiculture[]> {
    return this.argicultureRepository.findArgiculturesByCommunityId(id);
  }

  async getArgicultureById(id: number): Promise<Argiculture | null> {
    return this.argicultureRepository.findArgicultureById(id);
  }

  async getAllAgricultures(): Promise<Argiculture[]> {
    return this.argicultureRepository.findAllArgicultures();
  }

  async createArgiculture(
    argiculture: ArgicultureCreateDTO,
  ): Promise<Argiculture> {
    return this.argicultureRepository.createAgriculture(argiculture);
  }

  async updateAgriculture(
    id: number,
    argiculture: ArgicultureUpdateDTO,
  ): Promise<Argiculture> {
    return this.argicultureRepository.updateAgriculture(id, argiculture);
  }

  async deleteArgiculture(id: number): Promise<void> {
    return this.argicultureRepository.deleteArgiculture(id);
  }
}
