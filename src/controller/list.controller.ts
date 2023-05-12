import { Controller, Get } from '@nestjs/common';
import { ListService } from 'src/service/list.service';

@Controller()
export class ListController {
  constructor(private readonly server: ListService) {}

  @Get()
  getHello(): string {
    return "";
  }
}