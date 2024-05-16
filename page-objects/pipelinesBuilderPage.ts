import { expect, Page } from "@playwright/test";

export class PipelinesBuilderPage{
    private readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async checkPipelineBuilderComponents(){
        await this.configureVia('Pipeline Builder');
        await expect(this.page.getByLabel('Name')).toHaveValue('new-pipeline');
        await expect(this.page.getByRole('heading', { name: 'Tasks'})).toBeVisible();
        await expect(this.page.getByRole('heading', { name: 'Parameters'})).toBeVisible();
        await expect(this.page.getByRole('heading', { name: 'Workspaces'})).toBeVisible();
        await expect(this.page.getByRole('button', {name: 'Create'})).toHaveAttribute('disabled');
        await this.configureVia('Yaml view')
        await expect(this.page.locator('.osc-yaml-editor')).toBeVisible();
    }

    async createBasicPipeline(pipelineName: string){
        await this.configureVia('Pipeline Builder');
        await this.page.getByLabel('Name').clear();
        await this.page.getByLabel('Name').fill(pipelineName);
        await this.page.getByText('Add task').click();
        await this.page.getByPlaceholder('Add task...').fill('kn')
        await this.page.getByRole('button', {name: 'Add'}).click();
    }

    async configureVia(page: string){
        await this.page.getByRole('radio', { name: page}).check();
        await expect(this.page.getByRole('radio', { name: page})).toBeChecked();
    }

    async chooseWorkingProject(projectName: string){
        await this.page.getByRole('button', {name: 'Project'}).click();
        await this.page.getByPlaceholder('Select project...').fill(projectName);
        await this.page.locator('[data-test="namespace-dropdown-menu"]').locator('.pf-v5-c-menu__group').getByText(projectName).click();
        await expect(this.page.getByRole('button', {name: 'Project: ' + projectName})).toBeVisible();
    }


}