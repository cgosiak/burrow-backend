import { Request } from './request';
import { Status } from './status';

export class ConsumerStatus {
    constructor(
        public error: boolean,
        public message: string,
        public status: Status,
        public request: Request
    ) {}

    static fromJson(json: any): ConsumerStatus {
        return new ConsumerStatus(
            json.error,
            json.message,
            Status.fromJson(json.status),
            json.request
        );
    }
}