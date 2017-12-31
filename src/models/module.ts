import { ClientProfile } from './client-profile';

export class Module {
    constructor(
        public className: string,
        public servers: string[],
        public clientProfile: ClientProfile,
        public topicRefresh: number,
        public offsetRefresh: number
    ) {}

    static fromJson(json: any): Module {
        return new Module(json['class-name'], json.servers, ClientProfile.fromJson(json['client-profile']), json['topic-refresh'], json['offset-refresh'])
    }
}