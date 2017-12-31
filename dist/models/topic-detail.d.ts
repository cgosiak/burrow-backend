import { Request } from './request';
export declare class TopicDetail {
    error: boolean;
    message: string;
    offsets: number[];
    request: Request;
    constructor(error: boolean, message: string, offsets: number[], request: Request);
}
