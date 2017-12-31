import { Request } from './request';

export class AvailableTopics {
    constructor(
        public error: boolean,
        public message: string,
        public topics: string[],
        public request: Request
    ) {}
}