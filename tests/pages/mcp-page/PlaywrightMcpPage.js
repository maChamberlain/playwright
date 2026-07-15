import { expect } from '@playwright/test';
import { BasePage } from '../base-page/BasePage.js';

export class PlaywrightMcpPage extends BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     * Base Page Object for the Playwright MCP Page
     */
    constructor(page) {
        super(page);
    }

    async goto() {
        // Entry point path.
        await this.page.goto('https://playwright.dev/mcp/introduction');
    }
}
