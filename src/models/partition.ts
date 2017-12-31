import { ConsumerOffset } from './consumer-offset';

export class Partition {
    constructor(
        public topic: string,
        public partition: number,
        public owner: string,
        public status: string,
        public lag: number,
        public complete: boolean,
        public start: ConsumerOffset,
        public end: ConsumerOffset
    ) {}

    static fromJson(json: any): Partition {
        return new Partition(
            json.topic,
            json.partition,
            json.owner,
            json.status,
            json['current_lag'],
            json.complete,
            json.start,
            json.end
        );
    }
}