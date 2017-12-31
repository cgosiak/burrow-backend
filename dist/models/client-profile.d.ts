export declare class ClientProfile {
    name: string;
    clientId: string;
    kafkaVersion: string;
    tls: any;
    sasl: any;
    static fromJson(json: any): ClientProfile;
    constructor(name: string, clientId: string, kafkaVersion: string, tls: any, sasl: any);
}
