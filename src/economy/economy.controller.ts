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
import { EconomyService } from './economy.service';
import { Economy } from './economy.entity';
import { EconomyCreateDTO } from './dtos/economy-create.dto';
import { EconomyUpdateDTO } from './dtos/economy-update.dto';

@Controller('economy')
export class EconomyController {
  constructor(private economyService: EconomyService) {}

  @Get('/:id')
  async getEconomyByCommunityId(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Economy[]> {
    try {
      return await this.economyService.getEconomyByCommunityId(id);
    } catch (error) {
      throw new BadRequestException(
        error.message || 'Error during getting economy ',
      );
    }
  }

  @Get('/:id')
  async getEconomyById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Economy | null> {
    try {
      return this.economyService.getEconomyById(id);
    } catch (error) {
      throw new BadRequestException(
        error.message || 'Error during fetching economy ',
      );
    }
  }

  @Post()
  async createEconomy(economy: EconomyCreateDTO): Promise<Economy> {
    try {
      return this.economyService.createEconomy(economy);
    } catch (error) {
      throw new BadRequestException(
        error.message || 'Error during creating economy ',
      );
    }
  }

  @Patch()
  async updateEconomy(
    @Param('id', ParseIntPipe) id: number,
    economy: EconomyUpdateDTO,
  ): Promise<Economy | null> {
    try {
      return this.economyService.updateEconomy(id, economy);
    } catch (error) {
      throw new BadRequestException(
        error.message || 'Error during updating economy ',
      );
    }
  }

  @Delete('/:id')
  async deleteEconomy(@Param('id', ParseIntPipe) id: number): Promise<void> {
    try {
      return this.economyService.deleteEconomy(id);
    } catch (error) {
      throw new BadRequestException(
        error.message || 'Error during deleting economy ',
      );
    }
  }
}
