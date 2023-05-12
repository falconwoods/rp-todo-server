import { Injectable } from '@nestjs/common';
import { AddListDto } from 'src/dto/add-list.dto';
import { UpdateListDto } from 'src/dto/update-list.dto';
import { List } from 'src/interfaces/list.interface';

@Injectable()
export class ListService {
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
