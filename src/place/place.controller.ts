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
import { PlaceService } from './place.service';
import { Place } from './place.entity';
import { CreatePlaceDto } from './dtos/create-place.dto';
import { UpdatePlaceDto } from './dtos/update-place.dto';
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('Place')
@Controller('/api/v1/place')
export class PlaceController {
  constructor(private readonly placeService: PlaceService) {}

  @Get()
  @ApiOperation({ summary: 'Get all places' })
  @ApiResponse({
    status: 200,
    description: 'List of all places',
    type: Place,
    isArray: true,
  })
  getAll(): Promise<Place[]> {
    try {
      return this.placeService.getAll();
    } catch (error) {
      throw new BadRequestException(
        error.message || 'Error during getting places',
      );
    }
  }

  @Get('community/:id')
  @ApiOperation({ summary: 'Get places by community ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({
    status: 200,
    description: 'List of places related to a community',
    type: Place,
    isArray: true,
  })
  getByCommunityId(@Param('id', ParseIntPipe) id: number): Promise<Place[]> {
    try {
      return this.placeService.getByCommunityId(id);
    } catch (error) {
      throw new BadRequestException(
        error.message || 'Error during getting the place',
      );
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get place by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({
    status: 200,
    description: 'Place found by ID',
    type: Place,
  })
  getById(@Param('id', ParseIntPipe) id: number): Promise<Place | null> {
    try {
      return this.placeService.getById(id);
    } catch (error) {
      throw new BadRequestException(
        error.message || 'Error during getting the place',
      );
    }
  }

  @Post()
  @ApiOperation({ summary: 'Create a new place' })
  @ApiBody({ type: CreatePlaceDto })
  @ApiResponse({
    status: 201,
    description: 'Place created successfully',
    type: Place,
  })
  post(@Body() createDTO: CreatePlaceDto): Promise<Place> {
    try {
      return this.placeService.post(createDTO);
    } catch (error) {
      throw new BadRequestException(
        error.message || 'Error during creating the place',
      );
    }
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a place by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdatePlaceDto })
  @ApiResponse({
    status: 200,
    description: 'Place updated successfully',
    type: Place,
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDTO: UpdatePlaceDto,
  ): Promise<Place | null> {
    try {
      return this.placeService.update(id, updateDTO);
    } catch (error) {
      throw new BadRequestException(
        error.message || 'Error during updating the place',
      );
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a place by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({
    status: 200,
    description: 'Place deleted successfully',
  })
  delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    try {
      return this.placeService.delete(id);
    } catch (error) {
      throw new BadRequestException(
        error.message || 'Error during deleting the place',
      );
    }
  }
}
