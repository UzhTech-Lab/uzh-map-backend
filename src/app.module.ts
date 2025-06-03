import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Community } from './entities/community.entity';
import { Geography } from './entities/geography.entity';
import { Population } from './entities/population.entity';
import { Argiculture } from './entities/argiculture.entity';
import { Education } from './entities/educaiton.entity';
import { Economy } from './entities/economy.entity';
import { Infrastructure } from './entities/infrastructure.enity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USERNAME,
      password: String(process.env.DB_PASSWORD),
      database: process.env.DB_NAME,
      synchronize: true,
      logging: true,
      entities: [
        Community,
        Geography,
        Population,
        Argiculture,
        Education,
        Economy,
        Infrastructure,
      ],
      migrations: [],
      subscribers: [],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
