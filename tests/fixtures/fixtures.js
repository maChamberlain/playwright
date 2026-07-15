import { test as base } from '@playwright/test';
import { PlaywrightHomePage } from '../pages/home-page/PlaywrightHomePage.js';
import { PlaywrightDocsPage } from '../pages/docs-page/PlaywrightDocsPage.js';


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
});

export { expect } from '@playwright/test';