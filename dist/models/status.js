"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const partition_1 = require("./partition");
class Status {
    constructor(cluster, group, status, complete, partions, lag) {
        this.cluster = cluster;
        this.group = group;
        this.status = status;
        this.complete = complete;
        this.partions = partions;
        this.lag = lag;
    }
    static fromJson(json) {
        const partitions = [];
        for (let i = 0; i < json.partitions.length; i++) {
            partitions.push(partition_1.Partition.fromJson(json.partitions[i]));
        }
        return new Status(json.cluster, json.group, json.status, json.complete, partitions, json.totallag);
    }
}
exports.Status = Status;
//# sourceMappingURL=status.js.map