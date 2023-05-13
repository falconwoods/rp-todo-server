import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AddListDto } from 'src/models/lists/dto/add-list.dto';
import { UpdateListDto } from 'src/models/lists/dto/update-list.dto';
import { List } from 'src/models/lists/interfaces/list.interface';
import { ListsService } from 'src/models/lists/lists.service';

@Controller('lists')
export class ListsController {
  constructor(private readonly server: ListsService) {}

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