import { BasePage } from '../base-page/BasePage.js';
import { LeftSideNav } from '../../components/left-side-nav/LeftSideNav.js'

export class McpIntroPage extends BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     * Page Object for the MCP Introduction page
     */
    constructor(page) {
        super(page);
        this.leftSideNav = new LeftSideNav(page);
    }

    async goto() {
        // Entry point path.
        await this.page.goto('/mcp/introduction');
    }
}
