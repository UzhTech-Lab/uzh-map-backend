import { Module } from '@nestjs/common';
import { ArgicultureController } from './argiculture.controller';
import { ArgicultureService } from './argiculture.service';
import { ArgicultureRepository } from './argiculture.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Argiculture } from './argiculture.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Argiculture])],
  controllers: [ArgicultureController],
  providers: [ArgicultureService, ArgicultureRepository],
  exports: [ArgicultureRepository],
})
export class ArgicultureModule {}
