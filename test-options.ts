import { test as base } from "@playwright/test";

export type TestOptions = {
    clusterUrl: string;
    clusterUsername: string;
    clusterPassword: string;
}

export const test = base.extend<TestOptions>({
    clusterUrl: ['', {option: true}],
    clusterUsername: ['', {option: true}],
    clusterPassword: ['', {option: true}],
})