import { Injectable, NotFoundException } from '@nestjs/common';
import { TransportRepository } from './transport.repository';
import { Transport } from './transport.entity';
import { TransportCreateDTO } from './dtos/create-transport.dto';
import { TransportUpdateDTO } from './dtos/update-transport.dto';

@Injectable()
export class TransportService {
  constructor(private readonly transportRepo: TransportRepository) {}

  async getById(id: number): Promise<Transport> {
    const transport = await this.transportRepo.findById(id);
    if (!transport) {
      throw new NotFoundException('Transport record not found');
    }
    return transport;
  }

  async createTransport(data: TransportCreateDTO): Promise<Transport> {
    return this.transportRepo.create(data);
  }

  async updateTransport(
    id: number,
    data: TransportUpdateDTO,
  ): Promise<Transport> {
    return this.transportRepo.update(id, data);
  }

  async deleteTransport(id: number): Promise<void> {
    return this.transportRepo.delete(id);
  }
}
