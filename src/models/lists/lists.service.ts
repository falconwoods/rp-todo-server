import { Injectable } from '@nestjs/common';
import { AddListDto } from 'src/models/lists/dto/add-list.dto';
import { UpdateListDto } from 'src/models/lists/dto/update-list.dto';
import { List } from 'src/models/lists/interfaces/list.interface';

@Injectable()
export class ListsService {
  allLists(): List[] {
    return [];
  }

  async add(req:AddListDto) {
    return 'ok';
  }

  async del(id: number) :Promise<string>{
    return 'ok';
  }

  async update(req:UpdateListDto) {
    return 'ok';
  }

}
