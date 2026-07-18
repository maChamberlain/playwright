export class LeftSideNav {
    /**
     * @param {import('@playwright/test').Page} page
     * Base Page Object for the left side nav bar common to pages
     */
    constructor(page) {
        this.page = page;
        this.leftSideNav = page.getByRole('navigation', { name: "Docs sidebar" });
        this.installationMenuItem = this.leftSideNav.getByRole('link', { name: "Installation" });
        this.writingTestsMenuItem = this.leftSideNav.getByRole('link', { name: "Writing tests" })
    }
}