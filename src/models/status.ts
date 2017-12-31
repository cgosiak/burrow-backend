import {Partition} from './partition';

export class Status {
    constructor(
        public cluster: string,
        public group: string,
        public status: string,
        public complete: boolean,
        public partions: Partition[],
        public lag: number
    ) {}

    static fromJson(json: any): Status {
        const partitions: Partition[] = [];

        for (let i = 0; i < json.partitions.length; i++) {
            partitions.push(Partition.fromJson(json.partitions[i]));
        }

        return new Status(
            json.cluster,
            json.group,
            json.status,
            json.complete,
            partitions,
            json.totallag
        );
    }
}