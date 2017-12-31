import { ConsumerOffset } from './consumer-offset';

export class ConsumerTopicDetail {
    public static fromJson(json: any, topic: string): ConsumerTopicDetail {
        return new ConsumerTopicDetail(
            topic,
            json[0].offsets,
            json[0].owner,
            json[0]['current-lag'],
        );
    }

    constructor(
        public topic: string,
        public offsets: ConsumerOffset[],
        public owner: string,
        public lag: number,
    ) {}
}
