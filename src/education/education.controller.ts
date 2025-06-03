import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Education } from './educaiton.entity';
import { EducationService } from './education.service';
import { EducationCreateDTO } from './dtos/education-create.dto';
import { EducationUpdateDTO } from './dtos/education-update.dto';

@Controller('api/v1/education')
export class EducationController {
  constructor(private educationService: EducationService) {}

  @Get('/:id')
  async getEducationPlaces(@Param('id') id: number): Promise<Education[]> {
    try {
      const education_id = Number(id);
      if (isNaN(education_id)) {
        throw new Error('Invalid id ');
      }

      return await this.educationService.getEducationPlaces(education_id);
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
    @Param('id') id: number,
    @Body() body: EducationUpdateDTO,
  ): Promise<Education | null> {
    try {
      const education_id = Number(id);
      return this.educationService.updateEducationPlace(education_id, body);
    } catch (error) {
      throw new BadRequestException(
        error.message || 'Error during updating education place',
      );
    }
  }

  @Delete('/:id')
  async deleteEducationPlace(@Param('id') id: number): Promise<void> {
    try {
      const education_id = Number(id);
      return this.educationService.deleteEducationPlace(education_id);
    } catch (error) {
      throw new BadRequestException(
        error.message || 'Error during deleting education place',
      );
    }
  }
}
