import { expect } from '@playwright/test';
import { BasePage } from '../base-page/BasePage.js';

export class PlaywrightDocsPage extends BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     * Base Page Object for the Playwright Docs Page
     */
    constructor(page) {
        super(page);
    }

    async goto() {
        // Entry point path.
        await this.page.goto('/docs/intro');
    }
}
