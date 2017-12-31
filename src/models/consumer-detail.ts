import { Request } from './request';
import {ConsumerTopicDetail} from './consumer-topic-detail';
import {ConsumerStatus} from './consumer-status';

export class ConsumerDetail {
    public detail: ConsumerStatus;

    constructor(
        public error: boolean,
        public message: string,
        public topics: ConsumerTopicDetail[],
        public request: Request
    ) {}

    static fromJson(json: any): ConsumerDetail {
        let topics: ConsumerTopicDetail[] = [];

        Object.keys(json.topics).forEach(key => {
           topics.push(ConsumerTopicDetail.fromJson(json.topics[key], key));
        });

        return new ConsumerDetail(
            json.error,
            json.message,
            topics,
            Request.fromJson(json.request)
        );
    }
}