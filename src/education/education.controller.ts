import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { Education } from './educaiton.entity';
import { EducationService } from './education.service';
import { EducationCreateDTO } from './dtos/education-create.dto';
import { EducationUpdateDTO } from './dtos/education-update.dto';

@Controller('/api/v1/education')
export class EducationController {
  constructor(private educationService: EducationService) {}

  @Get('/:id')
  async getEducationPlaces(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Education[]> {
    try {
      if (isNaN(id)) {
        throw new Error('Invalid id ');
      }

      return await this.educationService.getEducationPlaces(id);
    } catch (error) {
      throw new BadRequestException(
        error.message || 'Error during fetching education places ',
      );
    }
  }

  @Post()
  async createEducationPlace(
    @Body() body: EducationCreateDTO,
  ): Promise<Education> {
    try {
      return this.educationService.createEducationPlace(body);
    } catch (error) {
      throw new BadRequestException(
        error.message || 'Error during creating education place',
      );
    }
  }

  @Patch('/:id')
  async updatedEducationPlace(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: EducationUpdateDTO,
  ): Promise<Education | null> {
    try {
      return this.educationService.updateEducationPlace(id, body);
    } catch (error) {
      throw new BadRequestException(
        error.message || 'Error during updating education place',
      );
    }
  }

  @Delete('/:id')
  async deleteEducationPlace(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<void> {
    try {
      return this.educationService.deleteEducationPlace(id);
    } catch (error) {
      throw new BadRequestException(
        error.message || 'Error during deleting education place',
      );
    }
  }
}
