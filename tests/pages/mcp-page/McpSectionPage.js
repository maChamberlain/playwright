import { BasePage } from '../base-page/BasePage.js';
import { LeftSideNav } from '../../components/left-side-nav/LeftSideNav.js'

export class McpSectionPage extends BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     * Section base for all MCP pages: adds the MCP left sidebar.
     */
    constructor(page) {
        super(page);
        this.leftSideNav = new LeftSideNav(page);
    }
}
