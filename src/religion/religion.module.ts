import { forwardRef, Module } from '@nestjs/common';
import { ReligionController } from './religion.controller';
import { ReligionService } from './religion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Religion } from './religion.entity';
import { ReligionRepository } from './religion.repository';
import { CommunityModule } from 'src/community/community.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Religion]),
    forwardRef(() => CommunityModule),
  ],
  controllers: [ReligionController],
  providers: [ReligionService, ReligionRepository],
  exports: [ReligionRepository],
})
export class ReligionModule {}
