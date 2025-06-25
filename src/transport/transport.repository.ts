import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Transport } from './transport.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TransportRepository {
  constructor(
    @InjectRepository(Transport)
    private readonly transportRepo: Repository<Transport>,
  ) {}

  async findById(id: number): Promise<Transport | null> {
    return this.transportRepo.findOne({ where: { id } });
  }

  async create(data: Partial<Transport>): Promise<Transport> {
    const transport = this.transportRepo.create(data);
    return this.transportRepo.save(transport);
  }

  async update(id: number, data: Partial<Transport>): Promise<Transport> {
    const transport = await this.findById(id);
    if (!transport) {
      throw new NotFoundException('Transport record not found');
    }
    Object.assign(transport, data);
    return this.transportRepo.save(transport);
  }

  async save(transport: Transport): Promise<Transport> {
    return await this.transportRepo.save(transport);
  }

  async delete(id: number): Promise<void> {
    await this.transportRepo.delete(id);
  }
}
