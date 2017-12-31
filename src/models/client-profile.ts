export class ClientProfile {
    constructor(
        public name: string,
        public clientId: string,
        public kafkaVersion: string,
        public tls: any,
        public sasl: any
    ) {}

    static fromJson(json: any): ClientProfile {
        return new ClientProfile(json.name, json['client-id'], json['kafka-version'], json.tls, json.sasl);
    }
}