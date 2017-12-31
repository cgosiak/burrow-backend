"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const WebRequest = require("web-request");
const available_cluster_1 = require("./models/available-cluster");
const consumer_detail_1 = require("./models/consumer-detail");
const consumer_status_1 = require("./models/consumer-status");
class BurrowService {
    constructor(burrowUrl) {
        this.burrowUrl = burrowUrl;
    }
    getClusters() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield WebRequest.json(`${this.burrowUrl}/v3/kafka`);
            return Promise.resolve(data);
        });
    }
    getCluster(cluster) {
        return __awaiter(this, void 0, void 0, function* () {
            const initialResponse = yield WebRequest.get(`${this.burrowUrl}/v3/kafka/${cluster}`);
            return Promise.resolve(available_cluster_1.AvailableCluster.fromJson(JSON.parse(initialResponse.content)));
        });
    }
    getConsumers(cluster) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield WebRequest.json(`${this.burrowUrl}/v3/kafka/${cluster}/consumer`);
            return Promise.resolve(data);
        });
    }
    getConsumer(cluster, consumer) {
        return __awaiter(this, void 0, void 0, function* () {
            const initialResponse = yield WebRequest.get(`${this.burrowUrl}/v3/kafka/${cluster}/consumer/${consumer}`);
            const consumerDetail = consumer_detail_1.ConsumerDetail.fromJson(JSON.parse(initialResponse.content));
            consumerDetail.detail = yield this.getConsumerStatus(cluster, consumer);
            return Promise.resolve(consumerDetail);
        });
    }
    getTopics(cluster) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield WebRequest.json(`${this.burrowUrl}/v3/kafka/${cluster}/topic`);
            return Promise.resolve(data);
        });
    }
    getTopic(cluster, topic) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield WebRequest.json(`${this.burrowUrl}/v3/kafka/${cluster}/topic/${topic}`);
            return Promise.resolve(data);
        });
    }
    getConsumerStatus(cluster, consumer) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield WebRequest.get(`${this.burrowUrl}/v3/kafka/${cluster}/consumer/${consumer}/lag`);
            return Promise.resolve(consumer_status_1.ConsumerStatus.fromJson(JSON.parse(data.content)));
        });
    }
}
exports.BurrowService = BurrowService;
//# sourceMappingURL=index.js.map