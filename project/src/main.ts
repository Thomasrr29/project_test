import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpStatus, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from './common/http-exception.filters';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const configSwagger = new DocumentBuilder()
  .setTitle('Animals API')
  .setDescription('Animals API that searches share with you the best information of their')
  .setVersion('1.0')
  .addTag('animals')
  .build()

  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('api', app, document)

  app.enableCors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true 
  })
  
  app.useGlobalPipes(
    new ValidationPipe({
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
    })
  )

  await app.listen(process.env.PORT ?? 3000);

  const serverUrl = await app.getUrl(); 

  console.log(`The server is running on: ${serverUrl}`)
  console.log(`Documentation is available at: ${serverUrl}/api`)
  console.log(`The PORT of working is: ${process.env.PORT}`)

  
}
bootstrap();
