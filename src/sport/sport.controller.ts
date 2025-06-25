import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { SportService } from './sport.service';
import { Sport } from './sport.entity';
import { SportCreateDTO } from './dtos/create-sport.dto';
import { SportUpdateDTO } from './dtos/update-sport.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('Sport')
@Controller('sport')
export class SportController {
  constructor(private readonly sportService: SportService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Get sport record by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Sport record found', type: Sport })
  async getById(@Param('id', ParseIntPipe) id: number): Promise<Sport> {
    return this.sportService.getById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new sport record' })
  @ApiBody({ type: SportCreateDTO })
  @ApiResponse({
    status: 201,
    description: 'Sport record created',
    type: Sport,
  })
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async create(@Body() data: SportCreateDTO): Promise<Sport> {
    return this.sportService.createSport(data);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update sport record by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: SportUpdateDTO })
  @ApiResponse({
    status: 200,
    description: 'Sport record updated',
    type: Sport,
  })
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: SportUpdateDTO,
  ): Promise<Sport> {
    return this.sportService.updateSport(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete sport record by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Sport record deleted' })
  async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.sportService.deleteSport(id);
  }
}
