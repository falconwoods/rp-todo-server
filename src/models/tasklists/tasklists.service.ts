import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddTasklistDto } from 'src/models/tasklists/dto/add-tasklist.dto';
import { UpdateTasklistDto } from 'src/models/tasklists/dto/update-tasklist.dto';
import { Repository } from 'typeorm';
import { Tasklist } from './entities/tasklist.entity';
import { DBQueryResult } from 'src/common/database/db-query-result';

@Injectable()
export class TasklistsService {

  constructor(
    @InjectRepository(Tasklist)
    private tasklistRep: Repository<Tasklist>
  ) { }

  async all(): Promise<any> {
    let lists = await this.tasklistRep.find();
    return DBQueryResult.create<Tasklist[]>(lists, null);
  }

  async create(req: AddTasklistDto): Promise<any> {
    let tasklist = this.tasklistRep.create(req);
    let ret = await this.tasklistRep.insert(tasklist);
    return DBQueryResult.create<Tasklist>(tasklist, null);
  }

  async del(id: number): Promise<DBQueryResult<number>> {
    // TODO: use transaction
    let ret = await this.tasklistRep.delete(id);
    return DBQueryResult.create<number>(ret.affected, null);
  }

  async update(req: UpdateTasklistDto): Promise<DBQueryResult<number>> {
    let { id, ...rest } = req;
    let ret = await this.tasklistRep.update({ id: req.id }, rest);
    return DBQueryResult.create<number>(ret.affected, null);
  }

}
