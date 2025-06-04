import { Module } from '@nestjs/common';
import { PopulationController } from './population.controller';

@Module({
  controllers: [PopulationController],
})
export class PopulationModule {}
