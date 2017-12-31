import { ClientProfile } from './client-profile';
export declare class Module {
    className: string;
    servers: string[];
    clientProfile: ClientProfile;
    topicRefresh: number;
    offsetRefresh: number;
    static fromJson(json: any): Module;
    constructor(className: string, servers: string[], clientProfile: ClientProfile, topicRefresh: number, offsetRefresh: number);
}
