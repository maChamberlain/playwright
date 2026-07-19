import { McpSectionPage } from './McpSectionPage.js';

export class McpIntroPage extends McpSectionPage {
    /**
     * @param {import('@playwright/test').Page} page
     * Page Object for the MCP Introduction page
     */
    constructor(page) {
        super(page);
        this.pageHeading = page.getByRole('heading', { name: "Playwright MCP", level: 1 });
    }

    async goto() {
        // Entry point path.
        await this.page.goto('/mcp/introduction');
    }
}
