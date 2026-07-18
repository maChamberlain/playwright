import { test, expect } from '../fixtures/fixtures.js';
import { WritingTestsPage } from '../pages/docs-page/WritingTestsPage.js';

/*
* Atomic tests to validate the Docs Page Leftside Navigation menu navigates correctly
*/

// Leftside Nav of the Docs Page navigates correctly
test('Leftside Nav - Select Installation', async ({ docsPage, page }) => {
    // Click the Installation Leftside nav item
    await docsPage.leftSideNav.installationMenuItem.click();
    // URL Should be for the Installation page
    await expect(page).toHaveURL('/docs/intro');
});

test('Leftside Nav - Select Writing Tests', async ({ docsPage, page }) => {
    const writingTestsPage = new WritingTestsPage(page);
    // Click the Writing Tests Leftside nav item
    await docsPage.leftSideNav.writingTestsMenuItem.click();
    // URL Should be for the Writing Tests page
    await expect(page).toHaveURL('/docs/writing-tests');
    await expect(writingTestsPage.pageHeading).toBeVisible();
});