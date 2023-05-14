import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task,  } from './entities/Task.entity';
import { Repository } from 'typeorm';
import { DBQueryResult } from 'src/common/database/db-query-result';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRep: Repository<Task>
  ) { }

  async all(): Promise<any> {
    let tasks = await this.tasksRep.find();
    return DBQueryResult.create<Task[]>(tasks, null);
  }

  async create(req: AddTaskDto): Promise<any> {
    let task = this.tasksRep.create(req);
    let ret = await this.tasksRep.insert(task);
    return DBQueryResult.create<Task>(task, null);
  }

  async del(id: number): Promise<DBQueryResult<number>> {
    // TODO: use transaction
    let ret = await this.tasksRep.delete(id);
    return DBQueryResult.create<number>(ret.affected, null);
  }

  async update(req: UpdateTaskDto): Promise<DBQueryResult<number>> {
    let { id, ...rest } = req;
    let ret = await this.tasksRep.update({ id: req.id }, rest);
    return DBQueryResult.create<number>(ret.affected, null);
  }

  
}
