import { Request } from './request';

export class TopicDetail {
    constructor(
        public error: boolean,
        public message: string,
        public offsets: number[],
        public request: Request,
    ) {}
}
