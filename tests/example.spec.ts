import {PageManager} from '../page-objects/pageManager';
import {test} from '../test-options';

test.use({
  ignoreHTTPSErrors: true,
});

test.beforeEach(async( {page, clusterUrl, clusterUsername, clusterPassword} ) => {
  test.setTimeout(60000)
  const pm = new PageManager(page);
  await pm.onAuthorizationPage().goto(clusterUrl);
  await pm.onAuthorizationPage().authorizeToTheCluster(clusterUsername, clusterPassword);
  await pm.navigateTo().projectsPage();
  await pm.onProjectsPage().ensureProjectExists('aut-pipeline');
  await pm.navigateTo().installedOperatorsPage();
  await pm.onIstalledOperatorsPage().ensurePipelinesOperatorInstalled();
})


test('Assert components on the builder page ', {tag: '@regression'}, async ({ page }) => {
  const pm = new PageManager(page);
  await pm.navigateTo().pipelinesPage();
  await pm.onPipelinesPage().goToPipelineBuilder();
  await pm.onPipelinesBuilderPage().checkPipelineBuilderComponents();
});

test('Create a basic pipeline from pipeline builder page', {tag: '@manually'}, async ({ page }) => {
  const pm = new PageManager(page);
  await pm.navigateTo().pipelinesPage();
  await pm.onPipelinesPage().goToPipelineBuilder();
  await pm.onPipelinesBuilderPage().chooseWorkingProject('aut-pipeline');
  await pm.onPipelinesBuilderPage().createBasicPipeline('pipe-three');
} )



