import { Request } from './request';
export declare class AvailableConsumers {
    error: boolean;
    message: string;
    consumers: string[];
    request: Request;
    constructor(error: boolean, message: string, consumers: string[], request: Request);
}
