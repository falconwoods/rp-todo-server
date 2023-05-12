import { Injectable } from '@nestjs/common';
import { Task } from 'src/interfaces/task.interface';

@Injectable()
export class TaskService {
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
