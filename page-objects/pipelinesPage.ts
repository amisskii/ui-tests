import { Page } from "@playwright/test";

export class PipelinesPage{
    private readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async goToPipelineBuilder(){
        await this.page.locator('.pf-v5-c-action-list').getByRole('button', {name: 'Create'}).click();
        await this.page.locator('.pf-v5-c-dropdown__menu').getByRole('button', {name: 'Pipeline'}).first().click();
    }
}