import { AvailableCluster } from './models/available-cluster';
import { AvailableClusters } from './models/available-clusters';
import { AvailableConsumers } from './models/available-consumers';
import { AvailableTopics } from './models/available-topics';
import { ConsumerDetail } from './models/consumer-detail';
import { TopicDetail } from './models/topic-detail';
export declare class BurrowService {
    burrowUrl: string;
    constructor(burrowUrl: string);
    getClusters(): Promise<AvailableClusters>;
    getCluster(cluster: string): Promise<AvailableCluster>;
    getConsumers(cluster: string): Promise<AvailableConsumers>;
    getConsumer(cluster: string, consumer: string): Promise<ConsumerDetail>;
    getTopics(cluster: string): Promise<AvailableTopics>;
    getTopic(cluster: string, topic: string): Promise<TopicDetail>;
    private getConsumerStatus(cluster, consumer);
}
