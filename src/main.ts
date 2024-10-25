import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	const config = new DocumentBuilder()
		.setTitle('Stellar Hotel Stay Api')
		.setDescription('API for managing room pricing and reservations')
		.setVersion('1.0')
		.setContact(
			'Leonardo Fabián Hernández Peña',
			'https://github.com/leo7962',
			'ingenieroleonardo@outlook.com'
		).setLicense('GPL-3.0', '')
		.build();

	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api', app, document);

	await app.listen(process.env.PORT ?? 3000);

}

bootstrap();
