import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AddListDto } from 'src/dto/add-list.dto';
import { UpdateListDto } from 'src/dto/update-list.dto';
import { List } from 'src/interfaces/list.interface';
import { ListService } from 'src/service/list.service';

@Controller('list')
export class ListController {
  constructor(private readonly server: ListService) {}

  @Get()
  async all(): Promise<List[]>{
    return this.server.allLists();
  }

  @Post()
  async add(@Body() req:AddListDto) {
    return this.server.add(req);
  }

  @Get(':id')
  async del(@Param('id') id: number) :Promise<string>{
    return this.server.del(id);
  }

  @Post()
  async update(@Body() req:UpdateListDto) {
    return this.server.update(req);
  }

}