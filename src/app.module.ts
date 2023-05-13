import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListController } from './controller/list.controller';
import { TaskController } from './controller/task.controller';
import { ListService } from './service/list.service';
import { TaskService } from './service/task.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController, ListController, TaskController],
  providers: [AppService, ListService, TaskService],
})
export class AppModule {}
