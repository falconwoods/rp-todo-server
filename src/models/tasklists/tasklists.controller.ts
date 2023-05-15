import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AddTasklistDto } from 'src/models/tasklists/dto/add-tasklist.dto';
import { UpdateTasklistDto } from 'src/models/tasklists/dto/update-tasklist.dto';
import { TasklistsService } from 'src/models/tasklists/tasklists.service';

@Controller('lists')
export class ListsController {
  constructor(private readonly service: TasklistsService) { }

  @Get()
  async all(): Promise<any> {
    return await this.service.all();
  }

  @Post()
  async create(@Body() req: AddTasklistDto) {
    return await this.service.create(req);
  }

  @Get(':id')
  async del(@Param('id') id: number) {
    return await this.service.del(id);
  }

  @Post()
  async update(@Body() req: UpdateTasklistDto) {
    return await this.service.update(req);
  }

}