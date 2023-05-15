import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TasksService } from 'src/models/tasks/tasks.service';
import { AddTaskDto } from './dto/add-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly service: TasksService) {}

  @Get()
  async all(): Promise<any>{
    return await this.service.all();
  }
  
  @Post()
  async create(@Body() req:AddTaskDto) {
    return await this.service.create(req);
  }

  @Get(':id')
  async del(@Param('id') id: number){
    return await this.service.del(id);
  }

  @Post()
  async update(@Body() req:UpdateTaskDto) {
    return await this.update(req);
  }
}