export class Request {
    public static fromJson(json: any): Request {
        return new Request(json.url, json.host);
    }

    constructor(
        public url: string,
        public host: string,
    ) {}
}
