import { ConsumerStatus } from './consumer-status';
import { ConsumerTopicDetail } from './consumer-topic-detail';
import { Request } from './request';

export class ConsumerDetail {
    public static fromJson(json: any): ConsumerDetail {
        const topics: ConsumerTopicDetail[] = [];

        Object.keys(json.topics).forEach((key) => {
            topics.push(ConsumerTopicDetail.fromJson(json.topics[key], key));
        });

        return new ConsumerDetail(
            json.error,
            json.message,
            topics,
            Request.fromJson(json.request),
        );
    }

    public detail: ConsumerStatus;

    constructor(
        public error: boolean,
        public message: string,
        public topics: ConsumerTopicDetail[],
        public request: Request,
    ) {}
}
