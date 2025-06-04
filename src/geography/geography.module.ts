import { Module } from '@nestjs/common';
import { GeographyController } from './geography.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Geography } from './geography.entity';
import { GeographyService } from './geography.service';
import { GeographyRepository } from './geography.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Geography])],
  controllers: [GeographyController],
  providers: [GeographyService, GeographyRepository],
  exports: [GeographyRepository],
})
export class GeographyModule {}
