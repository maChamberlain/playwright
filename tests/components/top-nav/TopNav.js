export class TopNav {
    /**
     * @param {import('@playwright/test').Page} page
     * Base Page Object for the top nav bar common to pages
     */
    constructor(page) {
        this.page = page;
        this.mainContainer = page.getByRole('navigation', { name: "Main" });
        this.docsLink = this.mainContainer.getByRole('link', { name: 'Docs' });
        this.mcpLink = this.mainContainer.getByRole('link', { name: 'MCP' });
        this.cliLink = this.mainContainer.getByRole('link', { name: 'CLI' });
        this.apiLink = this.mainContainer.getByRole('link', { name: 'API' });
        this.searchButton = this.mainContainer.getByRole('button', { name: 'Search' });
        // The search bar renders inside a modal outside the nav, so it is page scoped
        this.searchBar = page.getByRole('searchbox', { name: 'Search' });
    }
}