export class ConsumerOffset {
    constructor(
        public offset: number,
        public timestamp: number,
        public lag: number
    ) {}
}