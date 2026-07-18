import { DocsSectionPage } from './DocsSectionPage.js';

export class DocsIntroPage extends DocsSectionPage {
    /**
     * @param {import('@playwright/test').Page} page
     * Page Object for the Docs Intro page (/docs/intro)
     */
    constructor(page) {
        super(page);
    }

    async goto() {
        // Entry point path.
        await this.page.goto('/docs/intro');
    }
}
