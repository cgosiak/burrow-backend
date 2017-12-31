import { Request } from './request';
import { Status } from './status';
export declare class ConsumerStatus {
    error: boolean;
    message: string;
    status: Status;
    request: Request;
    static fromJson(json: any): ConsumerStatus;
    constructor(error: boolean, message: string, status: Status, request: Request);
}
