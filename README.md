<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--vkm_jIDa--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://i.imgur.com/2uWTVHO.png" alt="webdriver.io">

# WebdriverIO automation Web project

## Project created from scratch

- By: Mónica Monge Hernández (May 2024)
- [Linkedin profile](https://www.linkedin.com/in/mónica-monge-hernández)
- [GitHub page](https://monicamongehernandez.github.io/webdriverio-web)
- [GitHub code](https://github.com/MonicaMongeHernandez/webdriverio-web)

## Description

This suite of testing was implemented for the automation Web applications, UI testing, and API with the page object model (POM) design pattern and mocha as a test framework using typescript.

### Video link

In the following link, you can find a video that demonstrates the execution, set-up, explanation of the scenarios, results, and more.[Video link](https://GitHub-GoogleDrive)

## Goal

Validate an E2E flow and specific UI validations using API for validating broken links, environment variables to run specific pages, JSON to get URLs and specs paths according to console parameters, and demonstrate a good understanding of the framework and technologies. Some scenarios discussed in the interview were covered.

## Explanation of Technologies and Design Patterns

**Node.js**: Serves as the runtime environment for JavaScript on the server.<br>
**WebdriverIO**: The primary tool for browser automation.<br>
**Mocha**: The testing framework used alongside WebdriverIO.<br>
**TypeScript**: programming language.<br>
**Allure**: A reporting tool that integrates with WebdriverIO to provide visual test reports in HTML.<br>
**Page Object Model (POM)**: A design pattern that enhances test maintenance and reduces code duplication by creating an abstraction of web pages in separate classes. The classes represent the web pages, encapsulating the elements and their interactions, selectors/locators, constants, and methods on the web pages.<br>
**Chrome**: as browser used throughout the testing.<br>

## Scenarios

Two sites were selected to perform the testing. Happy and negative paths were implemented, and in the future, more additions will be made like CI/CD with GitHub actions (file was added - structure -), and integration with BrowserStack. If the test case fails Allure takes a screenshot.

All the test cases are automated by the scripts.

Note: The following test cases are as an overview. Consider that in a formal scenario a document is presented with all conditions, inputs, and outputs provided using a tool.

### 1) Saucedemo page: E2E testing

- <strong>URL:</strong> [Sauce page](https://www.saucedemo.com)

- <strong>General objective:</strong> Perform actions with selectors/locators in the DOM, fill out forms, click buttons, do scroll, validate texts, and URLs, use POM, browser actions, use table elements, validate a complete process.

- <strong>Dynamic parameters used</strong><br>
  In the file "wdio.config":<br>
  `baseUrl: 'https://www.saucedemo.com/'`,<br>
  `specs: ['./test/specs/saucedemo/**/*.ts']`,<br>

- <strong>Test Case #1: E2E</strong>

1. Go to [Sauce page](https://www.saucedemo.com)
2. Enter the username: “standard_user” and password: “secret_sauce” and click on “Login” button.
3. Validate the title page is “Products”
4. Validate the current URL page is https://www.saucedemo.com/inventory.html
5. Validate the text of the first article is “Sauce Labs Backpack”
6. Click on the button “Add to cart” of the article “Sauce Labs Backpack”
7. Validate the text of the button change to “Remove”
8. Scroll to the article “Test.allTheThings() T-Shirt (Red)”
9. Click on the button “Add to cart”
10. Scroll to the shopping cart button at the top of the page.
11. Click on the button cart button
12. Validate the current page. It should be https://www.saucedemo.com/cart.html
13. Click on the button “Checkout”
14. Fill out the form, First Name: “Joe” and Last Name: “Smith”, Zip/Postal Code: "30105"
15. Click on the button Continue
16. Validate the number of articles (2) is the same as the number displayed in the shopping cart at the top of the page in the right corner (2).
17. Click on the button “Finish”
18. Validate the page message is “Thank you for your order!”.
19. Validate the current URL. It should be https://www.saucedemo.com/checkout-complete.html

- <strong>Test Case #2: negative test</strong>

1. Go to [Sauce page](https://www.saucedemo.com)
2. Enter an invalid username: “invalid user”, password: “secret_sauce” and click on “Login” button.
3. Validate if the title page is “Products”. However, it will not be displayed because the user was invalid.

### 2) Qavbox page: validations

- <strong>URL:</strong> [Qavbox page](https://qavbox.github.io/demo/links)

- <strong>General objective:</strong> <p>validate broken links using node-fetch2 API, open and close Windows browsers pop-ups, perform actions with selectors/locators in the DOM, fill out forms, click buttons, do scroll, validation of shadow DOM selectors nested and difficult to catch in real scenarios.</p>

- <strong>Dynamic parameters used</strong><br>
  In the file "wdio.config":<br>
  `baseUrl: 'https://qavbox.github.io/demo/'`,<br>
  `specs: ['./test/specs/qavbox/**/*.ts']`,<br>

- <p><strong>Set-up datails</strong><br>
  In the file "wdio.config":<br>
  `baseUrl: 'https://qavbox.github.io/demo/'`,<br>
  `specs: ['./test/specs/qavbox/**/*.ts']`,<br></p>

- <strong>Test Case #1: Close multiple browser windows</strong>

1. Go to [Qavbox links page](https://qavbox.github.io/demo/links/)
2. Click on the button “Multi Window”.
3. Automatically Multi Windows will be open.
4. The script will close multiple browser windows one by one.
5. The results are displayed in the HTML report.

- <strong>Test Case #2: Handle nested shadowDOM element</strong>

1. Go to [Qavbox shadowDOM page](https://qavbox.github.io/demo/shadowDOM/)
2. The script finds and enters the value in the text box associated with the label "Open shadow". The selector/locator of this text box is shadowDOM (Access an element inside a given element's shadowRoot. Based on [webdriver documentation](https://webdriver.io/docs/api/element/shadow$/) ).
3. The result is displayed in the HTML report.

- <strong>Test Case #3: Scroll to elements</strong>

1. Go to [Qavbox sig up page](https://qavbox.github.io/demo/signup/)
2. Perform a scroll to "Tutorial!" link at the bottom of the page.
3. Perform a scroll to the "Upload your profile" button at the middle of the page, some parameters in the scroll method were used to use center alignment.
4. The result is displayed in the HTML report.

- <strong>Test Case #4: Find broken links using API</strong>

1. Go to [Qavbox links page](https://qavbox.github.io/demo/links/)
2. Find all the links (buttons and links).
3. Validate each link if the status code is fine or not.
4. The result is a list of broken URLs with their name and status codes associated. It is displayed in the HTML report.

## Technologies Versions

- WebdriverIO: @wdio/cli@8.36.1
- Version:Typescript: 5.4.5
- Mocha-framework: 8.36.1
- Allure report 8.36.1
- Node.js 20.12.2
- Chrome 125.0.6422.61

## Installation

1. GitHub repository: [here](https://github.com/MonicaMongeHernandez/webdriverio-web)
2. Clone the repository in the local machine.
3. Install the dependencies execution `npm install`.
4. Configure the files of WebdriverIO `wdio.conf.js` according to the executions.
5. Execute the following steps to give Allure access local files as a URL (based on [access](https://webmo.net/link/help/AccessingLocalFiles.html)):
   Chrome & Windows:
   - Run cmd to get a command window
   - Move to the Chrome directory, e.g.,
     cd C:\Users\your-user-name\AppData\Local\Google\Chrome\Application
   - Type:
     chrome.exe --allow-file-access-from-files

## Execution Testing

- Execute the command lines according to the page tested. It uses environment variables from CLI:<br>
  _For Sauce page_<br>
  `Env=sauce npm run wdio`<br>

  _For Qavbox page_<br>
  `Env=sauce npm run wdio`<br>

  If you execute the above flow and want to execute it again, please delete the allure folders, because it accumulates all the executions. Delete all folders from `...\reports\allure`

_Optional_

- The execution can be made headless with parameter `'--headless'` in 'wdio.config.ts' file
  'goog:chromeOptions': {<br>
  args: ['--headless', '--disable-gpu', '--no-sandbox'],{<br>
  ...

- _Note_: the following video can support the way to perform the execution [Video link](https://GitHub-GoogleDrive).
