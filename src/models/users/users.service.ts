import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { AddUser } from './dto/add-user';
import { DBQueryResult } from 'src/common/database/db-query-result';

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

  async createUser(req: AddUser): Promise<DBQueryResult<User> | undefined> {
    let user = this.usersRep.create(req);
    try {
      let ret = await this.usersRep.insert(user);
      return DBQueryResult.create<User>(user, null);
    }
    catch (err) {
      return DBQueryResult.create<User>(null, err.message);
    }
  }

}