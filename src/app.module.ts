import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListsController } from './models/tasklists/tasklists.controller';
import { TasksController } from './models/tasks/tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './models/users/users.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guard/jwt-auth.guard';
import {DataSource} from 'typeorm';
import { User } from './models/users/entities/user.entity';
import { Tasklist } from './models/tasklists/entities/tasklist.entity';
import { Task } from './models/tasks/entities/Task.entity';
import { ListsModule } from './models/tasklists/tasklists.module';
import { TasksModule } from './models/tasks/tasks.module';
import { UsersController } from './models/users/users.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'todo',
      entities: [User, Tasklist, Task],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    ListsModule,
    TasksModule
  ],
  controllers: [
    AppController,
    UsersController,
    ListsController,
    TasksController
  ],
  providers: [
    AppService,
    { provide: APP_GUARD, useClass: JwtAuthGuard }
  ],
})
export class AppModule { 
  constructor(private db: DataSource){}
}
