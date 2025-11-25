import 'dotenv/config';
import createDebug from 'debug';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

const debug = createDebug('la-reebe:server');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
  debug(`Server running on http://localhost:${process.env.PORT ?? 3000}`);
}

bootstrap().catch((error) => {
  debug('Bootstrap failed:', error);
});
