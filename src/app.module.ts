/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';
 
@Module({
  imports: [
    PostsModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
        // POSTGRES_HOST: 'localhost',
        // POSTGRES_PORT: '5432',
        // POSTGRES_USER: 'postgres',
        // POSTGRES_PASSWORD: 'Loc16092000',
        // POSTGRES_DB: 'nestjs',
        // PORT: '5000',
      })
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}