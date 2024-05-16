import { expect, Page } from "@playwright/test";

export class OperatorsPage{

    private readonly page: Page;

    constructor( page: Page){
        this.page = page;
    }

    async ensurePipelinesOperatorInstalled(){
        await this.page.getByPlaceholder('Search by name...').fill('Red Hat Openshift Pipelines');
        await expect(this.page.getByRole('link', {name: 'Red Hat OpenShift Pipelines'})).toBeVisible();
    }
}