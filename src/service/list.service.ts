import { Injectable } from '@nestjs/common';

@Injectable()
export class ListService {
  getHello(): string {
    return 'Hello World!';
  }
}
