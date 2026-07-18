import { test, expect } from '../fixtures/fixtures.js';

/*
* Atomic tests to validate the Leftside Navigation menu navigates correctly
*/

// Leftside Nav of the Docs Page navigates correctly
test('Left Nav - Select Installation from the Leftside Nav', async ({ docsPage, page }) => {
    // Click the Installation Leftside nav item
    await docsPage.leftSideNav.installationMenuItem.click();
    // URL Should be for the Installation page
    await expect(page).toHaveURL('/docs/intro');
});

// // Check Top Nav of the Docs Page
// test('Top Nav - MCP link navigates to MCP documentation URL', async ({ homePage, page }) => {
//     // Click the MCP top nav item
//     await homePage.topNav.mcpLink.click();
//     // URL Should be for the Docs page
//     await expect(page).toHaveURL('/mcp/introduction');
// });