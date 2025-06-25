import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { ReligionService } from './religion.service';
import { Religion } from './religion.entity';
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiBody,
} from '@nestjs/swagger';
import { ReligionCreateDTO } from './dtos/create-religion.dto';
import { ReligionUpdateDTO } from './dtos/update-religion.dto';

@ApiTags('Religion')
@Controller('religion')
export class ReligionController {
  constructor(private readonly religionService: ReligionService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Get religion record by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({
    status: 200,
    description: 'Religion record found',
    type: Religion,
  })
  async getById(@Param('id', ParseIntPipe) id: number): Promise<Religion> {
    return this.religionService.getById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new religion record' })
  @ApiBody({ type: ReligionCreateDTO })
  @ApiResponse({
    status: 201,
    description: 'Religion record created',
    type: Religion,
  })
  async create(@Body() religionData: ReligionCreateDTO): Promise<Religion> {
    return this.religionService.createReligion(religionData);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update religion record by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: ReligionUpdateDTO })
  @ApiResponse({
    status: 200,
    description: 'Religion record updated',
    type: Religion,
  })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: ReligionUpdateDTO,
  ): Promise<Religion> {
    return this.religionService.updateReligion(id, updateData);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete religion record by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Religion record deleted' })
  async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.religionService.deleteReligion(id);
  }
}
