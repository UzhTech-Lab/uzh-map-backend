import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Patch,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TransportService } from './transport.service';
import { Transport } from './transport.entity';
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiBody,
} from '@nestjs/swagger';
import { TransportCreateDTO } from './dtos/create-transport.dto';
import { TransportUpdateDTO } from './dtos/update-transport.dto';

@ApiTags('Transport')
@Controller('transport')
export class TransportController {
  constructor(private readonly transportService: TransportService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Get transport record by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({
    status: 200,
    description: 'Transport record found',
    type: Transport,
  })
  async getById(@Param('id', ParseIntPipe) id: number): Promise<Transport> {
    return this.transportService.getById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new transport record' })
  @ApiBody({ type: TransportCreateDTO })
  @ApiResponse({
    status: 201,
    description: 'Transport record created',
    type: Transport,
  })
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async create(@Body() data: TransportCreateDTO): Promise<Transport> {
    return this.transportService.createTransport(data);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update transport record by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: TransportUpdateDTO })
  @ApiResponse({
    status: 200,
    description: 'Transport record updated',
    type: Transport,
  })
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: TransportUpdateDTO,
  ): Promise<Transport> {
    return this.transportService.updateTransport(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete transport record by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Transport record deleted' })
  async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.transportService.deleteTransport(id);
  }
}
