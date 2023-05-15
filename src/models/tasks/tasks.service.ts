import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task,  } from './entities/Task.entity';
import { Repository } from 'typeorm';
import { DBQueryResult } from 'src/common/database/db-query-result';
import { UpdateTaskDto } from './dto/update-task.dto';
import { AddTaskDto } from './dto/add-task.dto';
import { CommonResponse } from 'src/common/response/CommonResponse';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRep: Repository<Task>
  ) { }

  async all(userId:number): Promise<any> {
    let tasks = await this.tasksRep.findBy({"userId": userId});
    return CommonResponse.createRaw(tasks, null);
  }

  async create(userId:number, req: AddTaskDto): Promise<any> {
    let task = this.tasksRep.create({"userId":userId, ...req});
    let ret = await this.tasksRep.insert(task);
    return CommonResponse.createRaw(task, null);
  }

  async del(id: number): Promise<any> {
    // TODO: use transaction
    let ret = await this.tasksRep.delete(id);
    return CommonResponse.createRaw(ret.affected, null);
  }

  async update(req: UpdateTaskDto): Promise<any> {
    let { id, ...rest } = req;
    let ret = await this.tasksRep.update({ id: req.id }, rest);
    return CommonResponse.createRaw(ret.affected, null);
  }
  
}
