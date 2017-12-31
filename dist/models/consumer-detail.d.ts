import { ConsumerStatus } from './consumer-status';
import { ConsumerTopicDetail } from './consumer-topic-detail';
import { Request } from './request';
export declare class ConsumerDetail {
    error: boolean;
    message: string;
    topics: ConsumerTopicDetail[];
    request: Request;
    static fromJson(json: any): ConsumerDetail;
    detail: ConsumerStatus;
    constructor(error: boolean, message: string, topics: ConsumerTopicDetail[], request: Request);
}
