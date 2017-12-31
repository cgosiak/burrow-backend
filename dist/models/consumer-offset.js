"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConsumerOffset {
    constructor(offset, timestamp, lag) {
        this.offset = offset;
        this.timestamp = timestamp;
        this.lag = lag;
    }
}
exports.ConsumerOffset = ConsumerOffset;
//# sourceMappingURL=consumer-offset.js.map