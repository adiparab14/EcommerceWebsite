

# UI Automated Testing

Automated UI Test for [Otrium website](https://otrium.com) is implemented as part of this project. This test framework was developed with Playwright and Typescript and implements Page Object Model Pattern.

## Frameworks
Following frameworks were used to implement the tests
- [Playwright Library](https://playwright.dev/) provides a framework for end to end testing for web applications
- [Playwright Test](https://playwright.dev/) is a test runner which uses the Playwright Library 


## Test Scenarios

#### Following test scenarios were covered
- Search a specific band and order a product of the brand


## Steps to execute

- Pre-requisite
    - `node.js` should be installed on the system.

- Setup
    - Run `npm install` to install node modules.
    - Add Otrium.com credentials in the `/env.ts` file.

- Execute tests
    - To execute all the tests on all three browsers (`Google Chrome`,`chromium`) without a test report 

        `npm run test` 

    - To execute all the tests on the specific browser

        `npm run test:browser ${Browser}` 
    - To run headed tests
    
        `npx playwright test --headed`
    - HTML Report is available in the folder `playwright-report` 

## Improvements possible
- API methods can be used in setting up the test state. For eg Login and Clearing the shopping cart can be done using api methods. This will reduce the execution time and also flakiness.
- Page elements can be saved in variable across all pages. This has been implemented for home page.
- Can be run using CI tools similar to the API test.

