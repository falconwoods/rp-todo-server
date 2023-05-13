import { Injectable } from '@nestjs/common';
import { Task } from 'src/models/tasks/interfaces/task.interface';

@Injectable()
export class TasksService {
  allTasks(): Task[]{
    return null;
  }

  async add(req:AddTaskDto) {
    return 'ok';
  }

  async del(id: string) :Promise<string>{
    return 'ok';
  }

  async update(req:UpdateTaskDto) {
    return 'ok';
  }
  
}
