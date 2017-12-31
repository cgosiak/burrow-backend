import * as WebRequest from 'web-request';
import { AvailableCluster } from './models/available-cluster';
import { AvailableClusters } from './models/available-clusters';
import { AvailableConsumers } from './models/available-consumers';
import { AvailableTopics } from './models/available-topics';
import { ConsumerDetail } from './models/consumer-detail';
import { ConsumerStatus } from './models/consumer-status';
import { TopicDetail } from './models/topic-detail';

export class BurrowService {
    public burrowUrl: string;

    constructor(burrowUrl: string) {
        this.burrowUrl = burrowUrl;
    }

    public async getClusters(): Promise<AvailableClusters> {
        const data = await WebRequest.json<AvailableClusters>(`${this.burrowUrl}/v3/kafka`);
        return Promise.resolve(data);
    }

    public async getCluster(cluster: string): Promise<AvailableCluster> {
        const initialResponse = await WebRequest.get(`${this.burrowUrl}/v3/kafka/${cluster}`);

        return Promise.resolve(AvailableCluster.fromJson(JSON.parse(initialResponse.content)));
    }

    public async getConsumers(cluster: string): Promise<AvailableConsumers> {
        const data = await WebRequest.json<AvailableConsumers>(`${this.burrowUrl}/v3/kafka/${cluster}/consumer`);
        return Promise.resolve(data);
    }

    public async getConsumer(cluster: string, consumer: string): Promise<ConsumerDetail> {
        const initialResponse = await WebRequest.get(`${this.burrowUrl}/v3/kafka/${cluster}/consumer/${consumer}`);
        const consumerDetail = ConsumerDetail.fromJson(JSON.parse(initialResponse.content));

        consumerDetail.detail = await this.getConsumerStatus(cluster, consumer);

        return Promise.resolve(consumerDetail);
    }

    public async getTopics(cluster: string): Promise<AvailableTopics> {
        const data = await WebRequest.json<AvailableTopics>(`${this.burrowUrl}/v3/kafka/${cluster}/topic`);
        return Promise.resolve(data);
    }

    public async getTopic(cluster: string, topic: string): Promise<TopicDetail> {
        const data = await WebRequest.json<TopicDetail>(`${this.burrowUrl}/v3/kafka/${cluster}/topic/${topic}`);
        return Promise.resolve(data);
    }

    private async getConsumerStatus(cluster: string, consumer: string): Promise<ConsumerStatus> {
        const data = await WebRequest.get(`${this.burrowUrl}/v3/kafka/${cluster}/consumer/${consumer}/lag`);
        return Promise.resolve(ConsumerStatus.fromJson(JSON.parse(data.content)));
    }
}
