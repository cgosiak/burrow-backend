import { Request } from './request';
export declare class AvailableClusters {
    error: boolean;
    message: string;
    clusters: string[];
    request: Request;
    constructor(error: boolean, message: string, clusters: string[], request: Request);
}
