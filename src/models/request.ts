export class Request {
    constructor(
        public url: string,
        public host: string
    ) {}

    static fromJson(json: any): Request {
        return new Request(json.url, json.host);
    }
}