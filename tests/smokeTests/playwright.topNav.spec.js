import { test, expect } from '@playwright/test';
import { PlaywrightHomePage } from '../pageObjects/homePage/playwrightHomePage.js';


/*
* Atomic test to validate all items in the top navigation bar are displayed.
*/
test('Playwright Home page - Top nav items are displayed', async ({ page }) => {
    const playwrightHomePage = new PlaywrightHomePage(page)
    const docsLink = await playwrightHomePage.docsLink;
    const mcpLink = await playwrightHomePage.mcpLink;
    const cliLink = await playwrightHomePage.cliLink;
    const apiLink = await playwrightHomePage.apiLink;

    await playwrightHomePage.goto();

    // Expect topNav to display: Docs, MCP, CLI, API
    await expect(docsLink).toBeVisible();
    await expect(mcpLink).toBeVisible();
    await expect(cliLink).toBeVisible();
    await expect(apiLink).toBeVisible();
});