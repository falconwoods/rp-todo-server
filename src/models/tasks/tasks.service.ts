import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task, } from './entities/Task.entity';
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

  async all(userId: number): Promise<any> {
    let tasks = await this.tasksRep.findBy({ "userId": userId });
    return CommonResponse.createRaw(tasks, null);
  }

  async findByListId(userId: number, listId: number): Promise<any> {
    let tasks = await this.tasksRep.findBy({ "userId": userId })
    if (listId == -1) {
      // all
      tasks = await this.tasksRep.findBy({ "userId": userId })
    }
    else if (listId == -2) {
      // important
      tasks = await this.tasksRep.findBy({ "userId": userId, 'important': true })
    }
    else if (listId == -3) {
      // planned
      tasks = await this.tasksRep
        .createQueryBuilder('entity')
        
        .where({
          'userId': userId
        })
        .andWhere('entity.due IS NOT NULL')
        .getMany();
    }
    else if (listId == -4) {
      // completed
      tasks = await this.tasksRep
        .createQueryBuilder('entity')
        .where({
          completed: true
        })
        .getMany();
    }
    else {
      tasks = await this.tasksRep.findBy({ "userId": userId, "listId": listId })
    }

    return CommonResponse.createRaw(tasks, null);
  }

  async create(userId: number, req: AddTaskDto): Promise<any> {
    let task = this.tasksRep.create({ "userId": userId, ...req });
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
