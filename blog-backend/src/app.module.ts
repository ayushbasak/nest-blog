import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { BlogModule } from './blog/blog.module';

ConfigModule.forRoot();
@Module({
  imports: [MongooseModule.forRoot(process.env.DB_URI), BlogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
