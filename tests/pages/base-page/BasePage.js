import { TopNav } from '../../components/top-nav/TopNav.js'

export class BasePage {
    /**
    * @param {import('@playwright/test').Page} page
    * Base Page Object for the Playwright Main Homepage
    */
    constructor(page) {
        this.page = page;
        this.topNav = new TopNav(page);
        this.baseURL = 'https://playwright.dev/';
    }
}