import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Task } from 'src/models/tasks/interfaces/task.interface';
import { TasksService } from 'src/models/tasks/tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly service: TasksService) {}

  @Get()
  async all(): Promise<Task[]>{
    return this.service.allTasks();
  }
  
  @Post()
  async add(@Body() req:AddTaskDto) {
    return this.service.add(req);
  }

  @Get(':id')
  async del(@Param('id') id: string) :Promise<string>{
    return this.service.del(id);
  }

  @Post()
  async update(@Body() req:UpdateTaskDto) {
    return this.update(req);
  }
}