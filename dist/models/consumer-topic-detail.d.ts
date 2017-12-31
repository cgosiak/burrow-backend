import { ConsumerOffset } from './consumer-offset';
export declare class ConsumerTopicDetail {
    topic: string;
    offsets: ConsumerOffset[];
    owner: string;
    lag: number;
    static fromJson(json: any, topic: string): ConsumerTopicDetail;
    constructor(topic: string, offsets: ConsumerOffset[], owner: string, lag: number);
}
