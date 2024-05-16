import { expect, Page } from "@playwright/test";

export class NavigationPage{

    private readonly page: Page

    constructor(page: Page){
        this.page = page;
    }

    async projectsPage(){
        await this.page.locator('[aria-label="Main navigation"]').getByRole('button', { name: 'Home' }).click();
        await this.page.locator('[aria-label="Main navigation"]').getByRole('link', { name: 'Projects'}).click();
    }

    async installedOperatorsPage(){
        await this.page.locator('[aria-label="Main navigation"]').getByRole('button', { name: 'Operators' }).click();
        await this.page.locator('[aria-label="Main navigation"]').getByRole('link', { name: 'Installed Operators'}).click();
    }

    async operatorHubPage(){
        await this.page.getByText('Operators').click();
        await this.page.getByText('Operator Hub').click();
    }

    async pipelinesPage(){
        await this.page.locator('[aria-label="Main navigation"]').getByRole('button', { name: 'Pipelines'}).click();
        await this.page.locator('[aria-label="Main navigation"]').getByRole('link', { name: 'Pipelines'}).click();
    }
}