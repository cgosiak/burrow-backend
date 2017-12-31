"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = require("./module");
const request_1 = require("./request");
class AvailableCluster {
    constructor(error, message, module, request) {
        this.error = error;
        this.message = message;
        this.module = module;
        this.request = request;
    }
    static fromJson(json) {
        return new AvailableCluster(json.error, json.message, module_1.Module.fromJson(json.module), request_1.Request.fromJson(json.request));
    }
}
exports.AvailableCluster = AvailableCluster;
//# sourceMappingURL=available-cluster.js.map