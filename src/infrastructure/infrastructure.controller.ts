import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { Infrastructure } from './infrastructure.entity';
import { InfrastructureCreateDTO } from './dtos/infrastructure-create.dto';
import { InfrastructureService } from './infrastructure.service';
import { InfrastructureUpdateDTO } from './dtos/infrastructure-update.dto';

@Controller('infrastructure')
export class InfrastructureController {
  constructor(private readonly infrastructureService: InfrastructureService) {}

  @Get('/:id')
  async getInfrastructureByCommunityId(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Infrastructure[]> {
    return this.infrastructureService.getInfrastructureByCommunityId(id);
  }

  @Post()
  async createInfrastructure(
    infrastructure: InfrastructureCreateDTO,
  ): Promise<Infrastructure> {
    return this.createInfrastructure(infrastructure);
  }

  @Patch('/:id')
  async updateInfrastructure(
    @Param('id', ParseIntPipe) id: number,
    updateInfrastructure: InfrastructureUpdateDTO,
  ): Promise<Infrastructure | null> {
    return this.infrastructureService.updateInfrastructure(
      id,
      updateInfrastructure,
    );
  }

  @Delete('/:id')
  async deleteInfrastructure(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<void> {
    return this.infrastructureService.deleteInfrastructure(id);
  }
}
