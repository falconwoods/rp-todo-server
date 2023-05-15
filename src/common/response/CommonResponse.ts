import { DBQueryResult } from "../database/db-query-result";

export class CommonResponse<T>{
    data: T;
    error: string;

    static create<T>(arg: DBQueryResult<T>){
        let res = new CommonResponse<T>();
        res.data = arg.data;
        res.error = arg.error;
        return res;
    }
}