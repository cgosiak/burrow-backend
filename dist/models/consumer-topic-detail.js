"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConsumerTopicDetail {
    constructor(topic, offsets, owner, lag) {
        this.topic = topic;
        this.offsets = offsets;
        this.owner = owner;
        this.lag = lag;
    }
    static fromJson(json, topic) {
        return new ConsumerTopicDetail(topic, json[0].offsets, json[0].owner, json[0]['current-lag']);
    }
}
exports.ConsumerTopicDetail = ConsumerTopicDetail;
//# sourceMappingURL=consumer-topic-detail.js.map