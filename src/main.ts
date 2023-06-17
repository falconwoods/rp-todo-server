import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';

const httpsOptions = {
  key: fs.readFileSync('./secrets/private.key'),
  cert: fs.readFileSync('./secrets/certificate.crt'),
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {httpsOptions});
  app.enableCors({
    allowedHeaders: ['content-type'],
    origin: ['http://localhost:4000','http://192.168.1.100:4000','http://192.168.1.102:4000','http://router.gosolo.space:4001'],
    credentials: true,
  });

  await app.listen(process.env.PORT ? parseInt(process.env.PORT) : 3000);
}

bootstrap();
