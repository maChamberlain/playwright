import { BasePage } from '../base-page/BasePage.js';
import { LeftSideNav } from '../../components/left-side-nav/LeftSideNav.js'

export class DocsSectionPage extends BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     * Section base for all Docs pages: adds the docs left sidebar.
     * Not a concrete page — extend it, don't instantiate it (no goto()).
     */
    constructor(page) {
        super(page);
        this.leftSideNav = new LeftSideNav(page);
    }
}
