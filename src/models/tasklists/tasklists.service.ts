import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddTasklistDto } from 'src/models/tasklists/dto/add-tasklist.dto';
import { UpdateTasklistDto } from 'src/models/tasklists/dto/update-tasklist.dto';
import { Repository } from 'typeorm';
import { Tasklist } from './entities/tasklist.entity';

import { DBQueryResult } from 'src/common/database/db-query-result';
import { CommonResponse } from 'src/common/response/CommonResponse';
import { Task } from '../tasks/entities/Task.entity';

@Injectable()
export class TasklistsService {

  constructor(
    @InjectRepository(Tasklist)
    private tasklistRep: Repository<Tasklist>,
    @InjectRepository(Task)
    private tasksRep: Repository<Task>
  ) { }

  async all(userId: number): Promise<any> {
    let lists = await this.tasklistRep.findBy({ "userId": userId });
    return CommonResponse.createRaw<Tasklist[]>(lists, null);
  }

  async create(userId: number, req: AddTasklistDto): Promise<any> {
    let tasklist = this.tasklistRep.create({ "userId": userId, ...req });
    let ret = await this.tasklistRep.insert(tasklist);
    return CommonResponse.createRaw<Tasklist>(tasklist, null);
  }

  async del(id: number): Promise<any> {
    let ret = await this.tasklistRep.delete(id);
    await this.tasksRep.delete({listId:id})
    return CommonResponse.createRaw<number>(ret.affected, null);
  }

  async update(req: UpdateTasklistDto): Promise<any> {
    let { id, ...rest } = req;
    let ret = await this.tasklistRep.update({ id: req.id }, rest);
    return CommonResponse.createRaw(ret.affected, null);
  }

}
