import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    allowedHeaders: ['content-type'],
    origin: ['http://192.168.1.100:4000','http:localhost:4000'],
    credentials: true,
  });
  await app.listen(3000);
}
bootstrap();
