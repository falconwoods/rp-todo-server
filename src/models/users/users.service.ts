import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { AddUser } from './dto/add-user';
import { DBQueryResult } from 'src/common/database/db-query-result';
import { CommonResponse } from 'src/common/response/CommonResponse';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRep: Repository<User>
  ) { }

  async findById(id: number): Promise<User | undefined> {
    return await this.usersRep.findOneBy({ id });
  }

  async findByName(username: string): Promise<User | undefined> {
    return await this.usersRep.findOneBy({ username });
  }

  async createUser(req: AddUser): Promise<any> {
    let user = this.usersRep.create(req);
    try {
      let ret = await this.usersRep.insert(user);
      return CommonResponse.createRaw(user, null);
    }
    catch (err) {
      return CommonResponse.createRaw(null, err.message);
    }
  }

}