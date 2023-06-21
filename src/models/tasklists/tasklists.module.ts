import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tasklist } from './entities/tasklist.entity';
import { TasklistsService } from './tasklists.service';
import { Task } from '../tasks/entities/Task.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Tasklist]), TypeOrmModule.forFeature([Task])],
  providers: [TasklistsService],
  exports: [TasklistsService],
})
export class ListsModule {}
