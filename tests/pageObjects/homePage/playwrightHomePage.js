import { expect } from '@playwright/test';

export class PlaywrightHomePage {
    /**
     * @param {import('@playwright/test').Page} page
     * Base Page Object for the PLaywright Main Homepage
     */
    constructor(page) {
        this.page = page;
        this.docsLink = page.getByRole('navigation', { name: "Main" }).getByRole('link', { name: 'Docs' });
        this.mcpLink = page.getByRole('navigation', { name: "Main" }).getByRole('link', { name: 'MCP' });
        this.cliLink = page.getByRole('navigation', { name: "Main" }).getByRole('link', { name: 'CLI' });
        this.apiLink = page.getByRole('navigation', { name: "Main" }).getByRole('link', { name: 'API' });

    }

    async goto() {
        await this.page.goto('https://playwright.dev');
    }
}
