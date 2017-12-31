import { Module } from './module';
import { Request } from './request';
export declare class AvailableCluster {
    error: boolean;
    message: string;
    module: Module;
    request: Request;
    static fromJson(json: any): AvailableCluster;
    constructor(error: boolean, message: string, module: Module, request: Request);
}
