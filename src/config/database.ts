import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Tasklist } from 'src/models/tasklists/entities/tasklist.entity';
import { Task } from 'src/models/tasks/entities/Task.entity';
import { User } from 'src/models/users/entities/user.entity';
import { ConfigService } from '@nestjs/config';

const MySQLConfig = async (configService: ConfigService): Promise<TypeOrmModuleOptions> => ({
  type: 'mysql',
  host: configService.get<string>('DB_HOST', 'localhost'),
  port: configService.get<number>('DB_PORT', 3306),
  username: configService.get<string>('DB_USER', 'todo'),
  password: configService.get<string>('DB_PWD', 'todo2023'),
  database: configService.get<string>('DB_NAME', 'todo'),
  entities: [User, Tasklist, Task],
  synchronize: true,
});

export { MySQLConfig };
