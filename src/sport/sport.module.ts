import { forwardRef, Module } from '@nestjs/common';
import { SportController } from './sport.controller';
import { SportService } from './sport.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sport } from './sport.entity';
import { CommunityModule } from 'src/community/community.module';
import { SportRepository } from './sport.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Sport]),
    forwardRef(() => CommunityModule),
  ],
  controllers: [SportController],
  providers: [SportService, SportRepository],
  exports: [SportRepository],
})
export class SportModule {}
