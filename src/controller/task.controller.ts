import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Task } from 'src/interfaces/task.interface';
import { TaskService } from 'src/service/task.service';

@Controller()
export class TaskController {
  constructor(private readonly service: TaskService) {}

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