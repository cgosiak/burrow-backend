"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClientProfile {
    constructor(name, clientId, kafkaVersion, tls, sasl) {
        this.name = name;
        this.clientId = clientId;
        this.kafkaVersion = kafkaVersion;
        this.tls = tls;
        this.sasl = sasl;
    }
    static fromJson(json) {
        return new ClientProfile(json.name, json['client-id'], json['kafka-version'], json.tls, json.sasl);
    }
}
exports.ClientProfile = ClientProfile;
//# sourceMappingURL=client-profile.js.map