import { test, expect } from '../fixtures/fixtures.js';

/*
* Atomic tests to validate the Top Navigation menu of the Home page navigates correctly
*/

// Check Top Nav of the Home Page
test('Top Nav - From Home page to Docs Page navigation', async ({ homePage, page }) => {
    // Click the Docs top nav item
    await homePage.topNav.docsLink.click();
    // URL Should be for the Docs page
    await expect(page).toHaveURL('/docs/intro');
});

// Check Top Nav of the Docs Page
test('Top Nav - MCP link navigates to MCP documentation URL', async ({ homePage, page }) => {
    // Click the MCP top nav item
    await homePage.topNav.mcpLink.click();
    // URL Should be for the Docs page
    await expect(page).toHaveURL('/mcp/introduction');
});
