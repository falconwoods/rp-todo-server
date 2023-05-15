import "reflect-metadata"
import { Tasklist } from "src/models/tasklists/entities/tasklist.entity"
import { Task } from "src/models/tasks/entities/Task.entity"
import { User } from "src/models/users/entities/user.entity"
import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [User, Tasklist, Task],
    migrations: [],
    subscribers: [],
})

export default AppDataSource;