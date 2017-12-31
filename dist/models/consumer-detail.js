"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consumer_topic_detail_1 = require("./consumer-topic-detail");
const request_1 = require("./request");
class ConsumerDetail {
    constructor(error, message, topics, request) {
        this.error = error;
        this.message = message;
        this.topics = topics;
        this.request = request;
    }
    static fromJson(json) {
        const topics = [];
        Object.keys(json.topics).forEach((key) => {
            topics.push(consumer_topic_detail_1.ConsumerTopicDetail.fromJson(json.topics[key], key));
        });
        return new ConsumerDetail(json.error, json.message, topics, request_1.Request.fromJson(json.request));
    }
}
exports.ConsumerDetail = ConsumerDetail;
//# sourceMappingURL=consumer-detail.js.map