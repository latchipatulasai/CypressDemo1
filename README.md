# Cypress Project

A minimal Cypress starter project that launches a URL and verifies the page title.

## Prerequisites

- Node.js installed (recommended version 18 or later)
- npm available in your terminal
- Internet access for installing packages and running the test URL

## Project setup from scratch

1. Open a terminal.
2. Navigate to the project folder:
   ```bash
   cd "c:\Users\saila\Documents\QA\Playwright\Practise\cypress-project"
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Available commands

- Open Cypress Test Runner UI:
  ```bash
  npm run cy:open
  ```
- Run tests in headless mode:
  ```bash
  npm run cy:run
  ```
- Run tests in headed mode (visible browser):
  ```bash
  npm run cy:run:headed
  ```

## Custom URL

Update the `baseUrl` in `cypress.config.js` if you want to test a different site.

## Basic workflow for beginners

1. Install or verify packages:
   ```bash
   npm install
   ```
2. Run in headed mode to watch the browser:
   ```bash
   npm run cy:run:headed
   ```
3. Run fast headless execution:
   ```bash
   npm run cy:run
   ```
4. Open the Cypress UI when learning or debugging:
   ```bash
   npm run cy:open
   ```

## Restart / refresh commands

- If tests fail or you changed config files, rerun:
  ```bash
  npm install
  ```
- If Cypress binary or cache needs refreshing:
  ```bash
  npx cypress install
  ```
- If you want to clear node_modules and reinstall:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```

## Notes

- Test file: `cypress/e2e/title.cy.js`
- Default URL configured in `cypress.config.js`
- `supportFile` is disabled with `supportFile: false`
- Start with `npm run cy:open` if you are new to Cypress.
