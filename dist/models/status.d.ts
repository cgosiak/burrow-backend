import { Partition } from './partition';
export declare class Status {
    cluster: string;
    group: string;
    status: string;
    complete: boolean;
    partions: Partition[];
    lag: number;
    static fromJson(json: any): Status;
    constructor(cluster: string, group: string, status: string, complete: boolean, partions: Partition[], lag: number);
}
