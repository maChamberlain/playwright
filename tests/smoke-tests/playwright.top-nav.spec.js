import { test, expect } from '../fixtures/fixtures.js';

/*
* Atomic tests to validate all items in the top navigation bar are displayed.
*/

// Check Top Nav of the Home Page
test('Playwright Home page - Top nav items are displayed', async ({ homePage }) => {
    // Expect topNav to display: Docs, MCP, CLI, API
    await expect(homePage.topNav.docsLink).toBeVisible();
    await expect(homePage.topNav.mcpLink).toBeVisible();
    await expect(homePage.topNav.cliLink).toBeVisible();
    await expect(homePage.topNav.apiLink).toBeVisible();
});

// Check Top Nav of the Docs Page
test('Playwright Docs page - Top nav items are displayed', async ({ docsPage }) => {
    // Expect topNav to display: Docs, MCP, CLI, API
    await expect(docsPage.topNav.docsLink).toBeVisible();
    await expect(docsPage.topNav.mcpLink).toBeVisible();
    await expect(docsPage.topNav.cliLink).toBeVisible();
    await expect(docsPage.topNav.apiLink).toBeVisible();
});