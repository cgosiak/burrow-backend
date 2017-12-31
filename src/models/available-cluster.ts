import { Request } from './request';
import {Module} from './module';

export class AvailableCluster {
    constructor(
        public error: boolean,
        public message: string,
        public module: Module,
        public request: Request
    ) {}

    static fromJson(json: any): AvailableCluster {
        return new AvailableCluster(json.error, json.message, Module.fromJson(json.module), Request.fromJson(json.request));
    }
}