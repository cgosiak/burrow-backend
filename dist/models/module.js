"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_profile_1 = require("./client-profile");
class Module {
    constructor(className, servers, clientProfile, topicRefresh, offsetRefresh) {
        this.className = className;
        this.servers = servers;
        this.clientProfile = clientProfile;
        this.topicRefresh = topicRefresh;
        this.offsetRefresh = offsetRefresh;
    }
    static fromJson(json) {
        return new Module(json['class-name'], json.servers, client_profile_1.ClientProfile.fromJson(json['client-profile']), json['topic-refresh'], json['offset-refresh']);
    }
}
exports.Module = Module;
//# sourceMappingURL=module.js.map