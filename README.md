# Playwright - Example Automation  
  
![Playwright Tests](https://github.com/maChamberlain/playwright/actions/workflows/playwright.yml/badge.svg)
  
> NOTE: All tests run against the Playwright source page (a third party site):  
  https://playwright.dev/ 

## Summary
This repository is a basic example of JavaScipt Playwright automation.  
It runs three test files against the Playwright Documentation site.  
**Browsers Used**: Chromium, Firefox, and Webkit (Safari)

GitHub Actions is triggered on Pull Requests or pushes to main,  
running all current tests. The current test state is indicated by  
the badge at the top of this Readme. 

## Design Notes  
This uses Page Object Models along with composed components.   
The BasePage Object provides the shared component (Top Nav).  
Section page objects (DocsSectionPage) provide components  
shared by related pages.

Fixtures drive the page setup, and initial page navigation. 
  
These tests are small atomic tests covering a narrow range of behavior. 

## Configuration Options  

| Option | Setting |
| --- | --- |
| Retry | 1 in CI |
| Trace | On retry in CI |
| Screenshot | On failure |
  
## Setup
  
1. Clone this repository
2. In target folder: ```npm install```
3. Install Playwright Browsers: ```npx playwright install```
> NOTE: Skip this step if you already have the browsers installed.


## Usage 
  
All tests are run from the 'playwright' folder.  

| Action | NPM Command | NPX Command |
| --- | --- | --- |
| Run All Tests | ```npm test``` | ```npx playwright test``` |
| Run Tests with Trace | ```npm test-with-trace``` | ```npx playwright test --trace on``` |
| Show Report | ```npm report``` | ```npx playwright show-report``` |

## Test List

| Test Area | Description | Spec File |
| --- | --- | --- |
| Top Nav Bar | Validates all top nav items are displayed on the Home, Docs, and MCP pages | `playwright.top-nav.spec.js` |
| Basic Home Page Navigation | Validates top nav links navigate from the Home page to the correct pages | `playwright.basic-homepage-navigation.spec.js` |
| Leftside Nav Navigation | Validates Docs leftside nav items (Installation, Writing tests) navigate to the correct pages | `playwright.left-nav-navigation.spec.js` |

