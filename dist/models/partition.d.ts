import { ConsumerOffset } from './consumer-offset';
export declare class Partition {
    topic: string;
    partition: number;
    owner: string;
    status: string;
    lag: number;
    complete: boolean;
    start: ConsumerOffset;
    end: ConsumerOffset;
    static fromJson(json: any): Partition;
    constructor(topic: string, partition: number, owner: string, status: string, lag: number, complete: boolean, start: ConsumerOffset, end: ConsumerOffset);
}
