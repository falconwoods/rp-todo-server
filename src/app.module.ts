import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListController } from './controller/list.controller';
import { TaskController } from './controller/task.controller';
import { ListService } from './service/list.service';
import { TaskService } from './service/task.service';

@Module({
  imports: [],
  controllers: [AppController, ListController, TaskController],
  providers: [AppService, ListService, TaskService],
})
export class AppModule {}
