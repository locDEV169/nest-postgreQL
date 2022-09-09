/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import PostsController from './controller/posts.controller';
import PostsService from './service/posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Post from './entity/post.entity';
 
@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}