# Testing Project for Aquanow

This project is designed to test the API and UI of parts of the Aquanow application, using Playwright, Axe and other supporting tools. The project includes tests to check the functionality of the web page, accessibility and work with the API.

## Project Structure

The project consists of several files, divided by test types:

- **api.fixtures.ts** - API testing, including sending data and checking responses.
- **filter.transaction.page.ts** - Page Object Model (POM) for pages related to banking services and transaction filtering.
- **login.page.ts** - POM for the authorization page.
- **apiRequester.mts** - API request utility.
- **accessibility.spec.ts** - Tests to check the web page’s accessibility using Axe.
- **ui.spec.ts** - user interface tests.
- **cjbankTestData.ts** - API test data.
- **otp.code.ts** - Generate one-time passwords (OTP).
- **. env** - Variable environments for keys and other configuration data.

## Requirements

Before starting work, make sure you have the following dependencies installed:

- **Node.js** version 16 or higher.
- ***npm** or **yarn** to set dependencies.

## Setting dependencies

1. Clone the repository:
   `bash
   git clone <repository url>
   cd <folder with repository>

2. Set all dependencies:

	npm install

## Configuration

Create the file . env in the project root (if it is not) and add your own key for OTP:

	KEY=your_key

## Testing

API Tests

API tests are located in the file api.spec.ts and use api.fixtures.ts to send requests and get data. To run API tests, execute the following command:

	npx playwright test api.spec.ts

UI tests

UI tests are located in the ui.spec.ts file and perform web application functionality testing, including checking various actions such as filtering transactions and displaying correct values. To run the UI tests use command:

	npx playwright test ui.spec.ts

Availability tests

Accessibility tests are located in the file accessibility.spec.ts and use Axe to analyze the page for accessibility errors. To run the availability tests, run:

	npx playwright test accessibility.spec.ts

Description of classes and functions
LoginPage
Authorization class on page:

loginWithCredentials - Fills in the form with login details and performs login.
enterOtp - Enters a one-time password to complete the authorization.
BankingServicesPage
Class for working with banking services:

filterTransaction - filters transactions by the specified ID.
mapTransaction - Displays the transaction and links it to the platform.
fillTransactionDetails - fills in the fields with transaction details and completes the process.
ApiRequester
Class for working with the API, sending requests to create transactions.

createCJBankTestTransaction - Creates a test transaction with the submitted data.
AxeBuilder
Used to analyze the page for accessibility errors with Axe.
