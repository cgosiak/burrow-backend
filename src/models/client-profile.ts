export class ClientProfile {
    public static fromJson(json: any): ClientProfile {
        return new ClientProfile(json.name, json['client-id'], json['kafka-version'], json.tls, json.sasl);
    }

    constructor(
        public name: string,
        public clientId: string,
        public kafkaVersion: string,
        public tls: any,
        public sasl: any,
    ) {}
}
