import { Request } from './request';
export declare class AvailableTopics {
    error: boolean;
    message: string;
    topics: string[];
    request: Request;
    constructor(error: boolean, message: string, topics: string[], request: Request);
}
