import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tasklist } from './entities/tasklist.entity';
import { ListsService } from './tasklists.service';

@Module({
  imports:[TypeOrmModule.forFeature([Tasklist])],
  providers: [ListsService],
  exports: [ListsService],
})
export class ListsModule {}
