import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tasklist } from './entities/tasklist.entity';
import { TasklistsService } from './tasklists.service';

@Module({
  imports:[TypeOrmModule.forFeature([Tasklist])],
  providers: [TasklistsService],
  exports: [TasklistsService],
})
export class ListsModule {}
