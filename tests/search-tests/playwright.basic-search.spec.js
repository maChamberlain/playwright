import { test, expect } from '../fixtures/fixtures.js';
import { McpIntroPage } from '../pages/mcp-page/McpIntroPage.js';

/*
* Basic test to validate searching from the top nav directs to the correct page
*/

test.describe('Top Nav - search', { tag: '@search' }, () => {

    // Search for 'mcp' and land on the MCP Introduction page
    test('Search - Searching for mcp navigates to the MCP Introduction page', async ({ homePage, page }) => {
        // Open the search modal
        await homePage.topNav.searchButton.click();
        // Click the search bar input field
        await homePage.topNav.searchBar.click();
        // Fill the search text
        await homePage.topNav.searchBar.fill('mcp');
        // Results load async, wait for the top result
        await expect(page.getByRole('option').first()).toBeVisible();
        // Submit to select the top result
        await homePage.topNav.searchBar.press('Enter');
        // URL Should be for the MCP Introduction page
        await expect(page).toHaveURL('/mcp/introduction');
        // The MCP Introduction page heading should be displayed
        const mcpPage = new McpIntroPage(page);
        await expect(mcpPage.pageHeading).toBeVisible();
    });
});
