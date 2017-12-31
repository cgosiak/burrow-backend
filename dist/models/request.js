"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Request {
    constructor(url, host) {
        this.url = url;
        this.host = host;
    }
    static fromJson(json) {
        return new Request(json.url, json.host);
    }
}
exports.Request = Request;
//# sourceMappingURL=request.js.map