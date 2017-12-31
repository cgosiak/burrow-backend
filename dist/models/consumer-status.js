"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const status_1 = require("./status");
class ConsumerStatus {
    constructor(error, message, status, request) {
        this.error = error;
        this.message = message;
        this.status = status;
        this.request = request;
    }
    static fromJson(json) {
        return new ConsumerStatus(json.error, json.message, status_1.Status.fromJson(json.status), json.request);
    }
}
exports.ConsumerStatus = ConsumerStatus;
//# sourceMappingURL=consumer-status.js.map