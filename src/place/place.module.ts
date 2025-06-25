import { forwardRef, Module } from '@nestjs/common';
import { PlaceService } from './place.service';
import { PlaceController } from './place.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Place } from './place.entity';
import { CommunityModule } from 'src/community/community.module';
import { PlaceRepository } from './place.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Place]),
    forwardRef(() => CommunityModule),
  ],
  providers: [PlaceService, PlaceRepository],
  controllers: [PlaceController],
  exports: [PlaceRepository],
})
export class PlaceModule {}
