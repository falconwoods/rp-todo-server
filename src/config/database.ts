import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Tasklist } from 'src/models/tasklists/entities/tasklist.entity';
import { Task } from 'src/models/tasks/entities/Task.entity';
import { User } from 'src/models/users/entities/user.entity';
import { DataSource } from 'typeorm';

const MySQLConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: '192.168.1.102',
    port: 3306,
    username: 'todo',
    password: 'todo2023',
    database: 'todo',
    entities: [User, Tasklist, Task],
    // entities: ['src/**/*.entity{.ts,.js}'],
    synchronize: true,
};

// const MySQLDataSource = new DataSource({
//     type: "mysql",
//     host: "localhost",
//     port: 3306,
//     username: "root",
//     password: "root",
//     database: "todo",
// });

export {MySQLConfig};
