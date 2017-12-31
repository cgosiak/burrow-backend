import { expect } from 'chai';
import 'mocha';
import {BurrowService} from '../src';

describe('Test Burrow Service', () => {
    const burrowService = new BurrowService('http://localhost:8000');

    describe('Check for Clusters', () => {
        it('Returns list of clusters', async () => {
            const data =  await burrowService.getClusters();
            expect(data.clusters.length).to.greaterThan(0);
        });
    });

    describe('Check for [local] Cluster', () => {
        it('Returns list of clusters', async () => {
            const data =  await burrowService.getCluster('local');
            expect(data.module.className).to.equal('kafka');
        });
    });

    describe('Check for consumer groups', () => {
        it('Returns list of consumer groups', async () => {
            const data =  await burrowService.getConsumers('local');
            expect(data.consumers.length).to.greaterThan(0);
        });
    });

    describe('Check for consumer group', () => {
        it('Returns consumer group', async () => {
            const data =  await burrowService.getConsumer('local', 'test-cg');
            expect(1).to.greaterThan(0);
        });
    });
});