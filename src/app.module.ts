import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListsController } from './models/lists/lists.controller';
import { TasksController } from './models/tasks/tasks.controller';
import { ListsService } from './models/lists/lists.service';
import { TasksService } from './models/tasks/tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './models/users/users.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guard/jwt-auth.guard';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
  ],
  controllers: [
    AppController,
    ListsController,
    TasksController
  ],
  providers: [
    AppService,
    ListsService,
    TasksService,
    { provide: APP_GUARD, useClass: JwtAuthGuard }
  ],
})
export class AppModule { }
