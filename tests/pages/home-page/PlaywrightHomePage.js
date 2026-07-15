import { expect } from '@playwright/test';
import { BasePage } from '../base-page/BasePage.js';

export class PlaywrightHomePage extends BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     * Base Page Object for the Playwright Main Homepage
     */
    constructor(page) {
        super(page);
    }

    async goto() {
        // Entry point path.
        await this.page.goto('https://playwright.dev');
    }
}
