import { Module } from '@nestjs/common';
import { EducationService } from './education.service';
import { EducationController } from './education.controller';
import { EducationRepository } from './education.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Education } from './educaiton.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Education])],
  controllers: [EducationController],
  providers: [EducationService, EducationRepository],
  exports: [EducationRepository],
})
export class EducationModule {}
