export class DBQueryResult<T> {

    private _data:T;
    private _error:string;
    
    constructor(data:T, error:string){
        this._data = data;
        this._error = error;
    }

    get data():T{
        return this._data;
    }

    get error():string{
        return this._error;
    }

    static create<T>(data:T, error:string){
        return new DBQueryResult<T>(data, error);
    }
}