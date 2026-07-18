import { test, expect } from '../fixtures/fixtures.js';

/*
* Atomic tests to validate the Leftside Navigation menu navigates correctly
*/

// Leftside Nav of the Docs Page navigates correctly
test('Leftside Nav - Select Installation', async ({ docsPage, page }) => {
    // Click the Installation Leftside nav item
    await docsPage.leftSideNav.installationMenuItem.click();
    // URL Should be for the Installation page
    await expect(page).toHaveURL('/docs/intro');
});

test('Leftside Nav - Select Writing Tests', async ({ docsPage, page }) => {
    // Click the Writing Tests Leftside nav item
    await docsPage.leftSideNav.writingTestsMenuItem.click();
    // URL Should be for the Installation page
    await expect(page).toHaveURL('/docs/writing-tests');
});