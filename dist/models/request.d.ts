export declare class Request {
    url: string;
    host: string;
    static fromJson(json: any): Request;
    constructor(url: string, host: string);
}
