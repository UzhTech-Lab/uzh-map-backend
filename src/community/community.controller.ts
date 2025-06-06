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
import { CommunityService } from './community.service';
import { CommunityCreateDTO } from './dtos/community-create.dto';
import { CommunityUpdateDTO } from './dtos/community-update.dto';
import { Community } from './community.entity';
import { FullCommunityCreateDTO } from './dtos/full-community-create.dto';

@Controller('api/v1/community')
export class CommunityController {
  constructor(private readonly communityService: CommunityService) {}

  @Get()
  async findAll(): Promise<Community[]> {
    try {
      return this.communityService.findAll();
    } catch (error) {
      throw new BadRequestException(
        error.message || 'Error during community receiving',
      );
    }
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<Community> {
    try {
      return this.communityService.findById(id);
    } catch (error) {
      throw new BadRequestException(
        error.message || 'Error during getting community ',
      );
    }
  }

  @Post()
  async create(@Body() dto: CommunityCreateDTO): Promise<Community> {
    try {
      return this.communityService.create(dto);
    } catch (error) {
      throw new BadRequestException(
        error.message || 'Error during community creation',
      );
    }
  }

  @Post('/full')
  async createFullCommunity(
    @Body() dto: FullCommunityCreateDTO,
  ): Promise<Community | null> {
    try {
      return this.communityService.createFullCommunity(dto);
    } catch (error) {
      throw new BadRequestException(
        error.message || 'Error during full community creation',
      );
    }
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: CommunityUpdateDTO,
  ): Promise<Community> {
    return this.communityService.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.communityService.delete(id);
  }
}
