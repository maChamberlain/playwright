import { DocsSectionPage } from './DocsSectionPage.js';

export class WritingTestsPage extends DocsSectionPage {
    /**
     * @param {import('@playwright/test').Page} page
     * Page Object for the Writing Tests docs page (/docs/writing-tests)
     */
    constructor(page) {
        super(page);
        this.pageHeading = page.getByRole('heading', { name: "Writing tests", level: 1 });
    }

    async goto() {
        // Entry point path.
        await this.page.goto('/docs/writing-tests');
    }
}
