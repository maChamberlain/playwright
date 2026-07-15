import { test as base } from '@playwright/test';
import { PlaywrightHomePage } from '../pages/home-page/PlaywrightHomePage.js';
import { PlaywrightDocsPage } from '../pages/docs-page/PlaywrightDocsPage.js';
import { PlaywrightMcpPage } from '../pages/mcp-page/PlaywrightMcpPage.js';

export const test = base.extend({
    homePage: async ({ page }, use) => {
        const homePage = new PlaywrightHomePage(page);
        await homePage.goto();
        await use(homePage);
    },

    docsPage: async ({ page }, use) => {
        const docsPage = new PlaywrightDocsPage(page);
        await docsPage.goto();
        await use(docsPage);
    },

    mcpPage: async ({ page }, use) => {
        const mcpPage = new PlaywrightMcpPage(page);
        await mcpPage.goto();
        await use(mcpPage);
    },

});

export { expect } from '@playwright/test';