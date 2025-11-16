import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SeedService } from '../seed/seed.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['*'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });

  const config = new DocumentBuilder()
    .setTitle('Community API')
    .setDescription('API for managmenting community')
    .setVersion('1.0')
    .build();

  const seed = app.get(SeedService);
  await seed.run();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
  console.log('Swagger available at /api-docs');

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
