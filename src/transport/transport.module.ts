import { forwardRef, Module } from '@nestjs/common';
import { TransportService } from './transport.service';
import { TransportController } from './transport.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transport } from './transport.entity';
import { CommunityModule } from 'src/community/community.module';
import { TransportRepository } from './transport.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Transport]),
    forwardRef(() => CommunityModule),
  ],
  providers: [TransportService, TransportRepository],
  controllers: [TransportController],
  exports: [TransportRepository],
})
export class TransportModule {}
