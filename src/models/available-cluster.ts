import { Module } from './module';
import { Request } from './request';

export class AvailableCluster {
    public static fromJson(json: any): AvailableCluster {
        return new AvailableCluster(
            json.error,
            json.message,
            Module.fromJson(json.module),
            Request.fromJson(json.request),
        );
    }

    constructor(
        public error: boolean,
        public message: string,
        public module: Module,
        public request: Request,
    ) {}
}
