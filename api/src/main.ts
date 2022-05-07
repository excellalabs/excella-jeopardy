// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'
import secureSession from 'fastify-secure-session';
import * as session from 'express-session';

import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  await app.register(secureSession, {
    secret: 'excellajeopardyreallyrocksandsomeotherstuff',
    salt: 'mq9hDxBVDbspDR6n',
  });

  app.enableCors();
  app.use(
    session({
      secret: 'excellajeopardysecret',
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true
    })
  )
  await app.listen(3000);
}
bootstrap();
