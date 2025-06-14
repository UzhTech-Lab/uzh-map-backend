import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Community } from './community.entity';
import { CommunityController } from './community.controller';
import { CommunityService } from './community.service';
import { CommunityRepository } from './community.repository';
import { GeographyModule } from '../geography/geography.module';
import { ArgicultureModule } from '../argiculture/agriculture.module';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { PopulationModule } from '../population/population.module';
import { EconomyModule } from '../economy/economy.module';
import { EducationModule } from '../education/education.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Community]),
    GeographyModule,
    ArgicultureModule,
    InfrastructureModule,
    PopulationModule,
    EconomyModule,
    EducationModule,
  ],
  controllers: [CommunityController],
  providers: [CommunityService, CommunityRepository],
  exports: [CommunityRepository],
})
export class CommunityModule {}
