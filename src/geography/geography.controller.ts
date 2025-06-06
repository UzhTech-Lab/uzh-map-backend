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
import { GeographyService } from './geography.service';
import { Geography } from './geography.entity';
import { GeographyCreateDTO } from './dtos/geography-create.dto';
import { GeographyUpdateDTO } from './dtos/geography-update.dto';

@Controller('geography')
export class GeographyController {
  constructor(private readonly geographyService: GeographyService) {}

  @Get('/:id')
  async getGeographyById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Geography[]> {
    try {
      return this.geographyService.getGeographyByCommunityId(id);
    } catch (error) {
      throw new BadRequestException(
        error.message || 'Error during getting geography',
      );
    }
  }

  @Post()
  async createGeography(geography: GeographyCreateDTO): Promise<Geography> {
    try {
      return this.geographyService.createGeography(geography);
    } catch (error) {
      throw new BadRequestException(
        error.message || 'Error during creating geography',
      );
    }
  }

  @Patch('/:id')
  async updateGeorgaphy(
    @Param('id', ParseIntPipe) id: number,
    geography: GeographyUpdateDTO,
  ): Promise<Geography | null> {
    try {
      return this.geographyService.updateGeography(id, geography);
    } catch (error) {
      throw new BadRequestException(
        error.message || 'Error during updating geography',
      );
    }
  }

  @Delete('/:id')
  async deleteGeorgaphy(@Param('id', ParseIntPipe) id: number): Promise<void> {
    try {
      return this.geographyService.deleteGeography(id);
    } catch (error) {
      throw new BadRequestException(
        error.message || 'Error during deleting geography',
      );
    }
  }
}
