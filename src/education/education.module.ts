import { Module } from '@nestjs/common';
import { EducationService } from './education.service';
import { EducationController } from './education.controller';

@Module({
  controllers: [EducationController],
})
export class EducationModule {
  imports: [];
  controllers: [];
  providers: [EducationService];
}
