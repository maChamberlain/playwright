import { test, expect } from '@playwright/test';
import { PlaywrightHomePage } from '../pages/home-page/PlaywrightHomePage.js';
import { LeftSideNav } from '../components/left-side-nav/LeftSideNav.js';

/*
* Atomic tests to verify the topmost leftside nav item takes users to the Introduction of the appropriate section
*/
test.skip('Playwright Leftside Nav - Docs Getting Started', async ({ page }) => {
    const playwrightHomePage = new PlaywrightHomePage(page);
    const docsLink = await playwrightHomePage.docsLink;
    const docsURL = 'https://playwright.dev/docs/intro';

    // Navigate to the playwright homepage
    await playwrightHomePage.goto();
    // Expect topNav to display: Docs
    await expect(docsLink).toBeVisible();
    // Click Docs in Top Nav
    await docsLink.click();
    // Confirm URL
    await expect(page).toHaveURL(docsURL);
    // Click Installation on the leftside nav
});

test.skip('Playwright Leftside Nav - Docs Installation Page', async ({ page }) => {
    const docsURL = 'https://playwright.dev/docs/intro';

    // Navigate to the playwright homepage
    await page.goto(docsURL);
    await page.waitForLoadState('networkidle');

    // Click Installation on the leftside nav

});