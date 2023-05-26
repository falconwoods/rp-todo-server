import { Body, Controller, Get, Req, Post, UseGuards } from '@nestjs/common';
import { AddTasklistDto } from 'src/models/tasklists/dto/add-tasklist.dto';
import { UpdateTasklistDto } from 'src/models/tasklists/dto/update-tasklist.dto';
import { TasklistsService } from 'src/models/tasklists/tasklists.service';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';

@Controller('lists')
export class ListsController {
  constructor(private readonly service: TasklistsService) { }

  @UseGuards(JwtAuthGuard)
  @Get('/all')
  async all(@Req() req): Promise<any> {
    return await this.service.all(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/create')
  async create(@Req() req, @Body() data: AddTasklistDto) {
    return await this.service.create(req.user.userId, data);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/delete')
  async del(@Body() req: any) {
    return await this.service.del(req.id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/update')
  async update(@Body() req: UpdateTasklistDto) {
    return await this.service.update(req);
  }

}