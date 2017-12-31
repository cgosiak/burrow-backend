import { Request } from './request';

export class AvailableConsumers {
    constructor(
        public error: boolean,
        public message: string,
        public consumers: string[],
        public request: Request,
    ) {}
}
