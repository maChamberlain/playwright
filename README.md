# Playwright - Example Automation  
  
![Playwright Tests](https://github.com/maChamberlain/playwright/actions/workflows/playwright.yml/badge.svg)
  
This repository contains basic examples of Playwright automation.  
> NOTE: All tests run against the Playwright source page https://playwright.dev/ which is a third party site. 

Configuration options in use:  
- screenshots: On failure
- trace: On retry
  
## Setup
  
1. Clone this repository
2. In target folder: ```npm install```


## Usage 
  
All tests are run from the 'playwright' folder.  
- Run All Tests: ```npx playwright test```

## Test List

| Test Area | Description | Spec File |
| --- | --- | --- |
| Top Nav Bar | Validates all top nav items are displayed on the Home, Docs, and MCP pages | `playwright.top-nav.spec.js` |
| Basic Home Page Navigation | Validates top nav links navigate from the Home page to the correct pages | `playwright.basic-homepage-navigation.spec.js` |
| Leftside Nav Navigation | Validates Docs leftside nav items (Installation, Writing tests) navigate to the correct pages | `playwright.left-nav-navigation.spec.js` |

