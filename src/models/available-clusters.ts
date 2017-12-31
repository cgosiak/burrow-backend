import { Request } from './request';

export class AvailableClusters {
    constructor(
        public error: boolean,
        public message: string,
        public clusters: string[],
        public request: Request,
    ) {}
}
