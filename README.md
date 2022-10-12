# Freenow-assessment

A Cypress Test Automation Framework with Cucumber to test the [Wikipedia](https://www.wikipedia.org/)'s search feature.

## Table of contents

* Getting started
  * Prerequisites
  * Installation
  * Folder Structure
  
* How to run the tests
  * Test execution
  
### Prerequisites

- [Node.js](https://nodejs.org/) v16.17.1 - should be installed in the machine.


### Installation

 1) Clone the repository using below steps,

 ```sh
 git clone https://github.com/AbineshBabu/freenow-assessment.git
 ```

 2) Install dependencies:

 ```sh
 npm install
 ```
 
### Folder Structure

- `integration` - To maintain all the test cases in Cucumber feature and step definition.
- `pageobjects` - To maintain page elements and page actions.
- `plugins` - To maintain the events listeners. Logs the events.
- `support` - To maintain reusable scripts.
- `cypress.json` - Cypress configurations. Override default values

## How to run the tests

  ### Test execution
 - `npm run test` - To execute all the test cases of the search feature developed in Cucumber.

 ### Test report
   - Test report (index.html) will be generated automatically post the 'npm run test' command execution.
   - `npm run posttest` - To manually generate the Test report.
   - Test Report will be generated inside the following folder `cypress/report/`.


## CircleCI integration

  ### Folder structure
 - `.circleci` - To maintain CircleCI configuration stored in `config.yml`.

  ### CircleCI pipeline link
 - https://app.circleci.com/pipelines/github/AbineshBabu/freenow-assessment?branch=main
