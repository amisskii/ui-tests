import { expect, Page } from "@playwright/test";

export class ProjectsPage{

    private readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async ensureProjectExists(projectName: string) {
        const projectLink = this.page.getByRole('link', { name: projectName});
        await this.page.getByPlaceholder('Search by name...').fill(projectName);
        if (!await projectLink.isVisible()){
            await this.page.getByRole('button', {name: 'Create Project'}).click();
            await this.page.locator('[id="input-name"]').fill(projectName);
            await this.page.getByRole('button', {name: 'Create'}).click();
        }
        await expect(projectLink).toBeVisible();
    }

}