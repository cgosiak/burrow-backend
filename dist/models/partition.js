"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Partition {
    constructor(topic, partition, owner, status, lag, complete, start, end) {
        this.topic = topic;
        this.partition = partition;
        this.owner = owner;
        this.status = status;
        this.lag = lag;
        this.complete = complete;
        this.start = start;
        this.end = end;
    }
    static fromJson(json) {
        return new Partition(json.topic, json.partition, json.owner, json.status, json['current_lag'], json.complete, json.start, json.end);
    }
}
exports.Partition = Partition;
//# sourceMappingURL=partition.js.map