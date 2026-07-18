import { test as base } from '@playwright/test';
import { PlaywrightHomePage } from '../pages/home-page/PlaywrightHomePage.js';
import { DocsIntroPage } from '../pages/docs-page/DocsIntroPage.js';
import { WritingTestsPage } from '../pages/docs-page/WritingTestsPage.js';
import { PlaywrightMcpPage } from '../pages/mcp-page/PlaywrightMcpPage.js';

export const test = base.extend({
    homePage: async ({ page }, use) => {
        const homePage = new PlaywrightHomePage(page);
        await homePage.goto();
        await use(homePage);
    },

    docsPage: async ({ page }, use) => {
        const docsPage = new DocsIntroPage(page);
        await docsPage.goto();
        await use(docsPage);
    },

    writingTestsPage: async ({ page }, use) => {
        const writingTestsPage = new WritingTestsPage(page);
        await writingTestsPage.goto();
        await use(writingTestsPage);
    },

    mcpPage: async ({ page }, use) => {
        const mcpPage = new PlaywrightMcpPage(page);
        await mcpPage.goto();
        await use(mcpPage);
    },

});

export { expect } from '@playwright/test';