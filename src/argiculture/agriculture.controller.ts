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
import { AgricultureService } from './agriculture.service';
import { AgricultureCreateDTO } from './dtos/argiculture-create.dto';
import { Agriculture } from './agriculture.entity';
import { AgricultureUpdateDTO } from './dtos/argiculture-update.dto';

@Controller('/api/v1/argiculture')
export class ArgicultureController {
  constructor(private readonly argicultureService: AgricultureService) {}
  @Get('/:id')
  getArgicultureByCommunityId(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.argicultureService.getArgicultureByCommunityId(id);
    } catch (error) {
      throw new BadRequestException(
        error.message || 'Error during getting argiculture',
      );
    }
  }

  @Post()
  postArgiculture(
    @Body() argiculture: AgricultureCreateDTO,
  ): Promise<Agriculture> {
    try {
      return this.argicultureService.createArgiculture(argiculture);
    } catch (error) {
      throw new BadRequestException(
        error.message || 'Error during getting argiculture',
      );
    }
  }

  @Patch('/:id')
  patchArgiculture(
    @Param('id', ParseIntPipe) id: number,
    @Body() argiculture: AgricultureUpdateDTO,
  ): Promise<Agriculture | null> {
    try {
      return this.argicultureService.updateAgriculture(id, argiculture);
    } catch (error: any) {
      throw new BadRequestException(
        error.message || 'Error during getting argiculture',
      );
    }
  }

  @Delete('/:id')
  deleteArgiculture(@Param('id') id: number): Promise<void> {
    try {
      return this.argicultureService.deleteArgiculture(id);
    } catch (error) {
      throw new BadRequestException(
        error.message || 'Error during getting argiculture',
      );
    }
  }
}
