import { Controller, Get } from '@nestjs/common';
import { TaskService } from 'src/service/task.service';

@Controller()
export class TaskController {
  constructor(private readonly service: TaskService) {}

  @Get()
  getHello(): string {
    return "";
  }
}