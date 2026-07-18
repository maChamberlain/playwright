import { test, expect } from '../fixtures/fixtures.js';

/*
* Atomic tests to validate all items in the top navigation bar are displayed.
*/

// Expect topNav to display: Docs, MCP, CLI, API
async function expectTopNavItemsVisible(topNav) {
    await expect(topNav.docsLink).toBeVisible();
    await expect(topNav.mcpLink).toBeVisible();
    await expect(topNav.cliLink).toBeVisible();
    await expect(topNav.apiLink).toBeVisible();
}

// Check Top Nav of the Home Page
test('Playwright Home page - Top nav items are displayed', async ({ homePage }) => {
    await expectTopNavItemsVisible(homePage.topNav);
});

// Check Top Nav of the Docs Page
test('Playwright Docs page - Top nav items are displayed', async ({ docsPage }) => {
    await expectTopNavItemsVisible(docsPage.topNav);
});

// Check Top Nav of the MCP Page
test('Playwright MCP page - Top nav items are displayed', async ({ mcpPage }) => {
    await expectTopNavItemsVisible(mcpPage.topNav);
});
