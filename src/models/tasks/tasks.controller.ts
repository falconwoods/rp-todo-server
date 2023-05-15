import { Body, Controller, Get, Req, Post, UseGuards } from '@nestjs/common';
import { TasksService } from 'src/models/tasks/tasks.service';
import { AddTaskDto } from './dto/add-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { CommonResponse } from 'src/common/response/CommonResponse';

@Controller('tasks')
export class TasksController {
  constructor(private readonly service: TasksService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/all')
  async all(@Req() req:any): Promise<any>{
    return await this.service.all(req.user.userId);
  }
  
  @UseGuards(JwtAuthGuard)
  @Post('/create')
  async create(@Req() req:any, @Body() data:AddTaskDto) {
    return await this.service.create(req.user.userId, data);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/del')
  async del(@Body() req:any){
    return await this.service.del(req.id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/update')
  async update(@Body() req:UpdateTaskDto) {
    return await this.service.update(req);
  }
}