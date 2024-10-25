import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
  const config = new DocumentBuilder()
      .setTitle('Stellar Hotal Stay Api')
      .setDescription('API for managing room pricing and reservations')
      .setVersion('1.0')
      .build();

  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('api', app, document);
}

bootstrap();
