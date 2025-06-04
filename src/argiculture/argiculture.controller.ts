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
import { ArgicultureService } from './argiculture.service';
import { ArgicultureCreateDTO } from './dtos/argiculture-create.dto';
import { Argiculture } from './argiculture.entity';
import { ArgicultureUpdateDTO } from './dtos/argiculture-update.dto';

@Controller('/api/v1/argiculture')
export class ArgicultureController {
  constructor(private readonly argicultureService: ArgicultureService) {}
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
    @Body() argiculture: ArgicultureCreateDTO,
  ): Promise<Argiculture> {
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
    @Body() argiculture: ArgicultureUpdateDTO,
  ): Promise<Argiculture> {
    try {
      return this.argicultureService.updateAgriculture(id, argiculture);
    } catch (error) {
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
