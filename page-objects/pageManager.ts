import { Page } from "@playwright/test";
import {NavigationPage} from './navigationPage';
import {ProjectsPage} from './projectsPage';
import { OperatorsPage } from "./operatorsPage";
import { PipelinesPage } from "./pipelinesPage";
import { PipelinesBuilderPage } from "./pipelinesBuilderPage";
import { AuthorizationPage } from "./authorizationPage";

export class PageManager{
    private readonly page: Page
    private readonly navigationPage: NavigationPage;
    private readonly projectsPage: ProjectsPage;
    private readonly operatorsPage: OperatorsPage;
    private readonly pipelinesPage: PipelinesPage;
    private readonly pipelinesBuilderPage: PipelinesBuilderPage;
    private readonly authorizationPage: AuthorizationPage;

    constructor( page: Page){
        this.page = page;
        this.navigationPage = new NavigationPage(this.page);
        this.projectsPage = new ProjectsPage(this.page);
        this.operatorsPage = new OperatorsPage(this.page);
        this.pipelinesPage = new PipelinesPage(this.page);
        this.pipelinesBuilderPage = new PipelinesBuilderPage(this.page);
        this.authorizationPage = new AuthorizationPage(this.page);
    }

    navigateTo(){
        return this.navigationPage;
    }

    onProjectsPage(){
        return this.projectsPage;
    }

    onPipelinesPage() {
        return this.pipelinesPage;
    }


    onIstalledOperatorsPage(){
        return this.operatorsPage;
    }

    onPipelinesBuilderPage(){
        return this.pipelinesBuilderPage;
    }

    onAuthorizationPage(){
        return this.authorizationPage;
    }
}