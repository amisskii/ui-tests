import { Page } from "@playwright/test";

export class AuthorizationPage{

    private readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async goto(clusterUrl: string){
        await this.page.goto(clusterUrl);
    }

    async authorizeToTheCluster(clusterUsername: string, clusterPassword: string){
        await this.page.getByText('kube:admin').click();
        await this.page.getByLabel('Username').fill(clusterUsername);
        await this.page.getByLabel('Password').fill(clusterPassword);
        await this.page.getByRole('button', { name: 'Log in'}).click();
    }
}