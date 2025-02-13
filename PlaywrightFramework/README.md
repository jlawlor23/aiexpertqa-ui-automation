# PlaywrightFramework

## Introduction

AI Expert UI Test framework

## Technologies/Tools used in building the framework

- VS Code - IDE
- Playwright - framework for Web Testing and Automation
- JavaScript - Programming language
- Allure Reports - Reporting framework
- GitHub - Version control
- Jenkins - CI/CD

## Steps to clone execute the tests

`git clone <repo name>>`<br/>
`cd PlaywrightFramework`<br/>
`TEST_ENV=<env from env.config> npx playwright test`<br/>

Example

To run the Login spec file on EP1 WS2 Environment

TEST_ENV=ep1_ws2 npx playwright test tests/logintest.spec.ts


## Screenshot:

- Take Screenshots On test failures Method will automatically capture & store the screenshots under /playwright-report directory.

## Reporting:

- The framework produce Alure report. It resides in the allure-report folder.This reports gives the detailed information like screenshots,traces. On clicking these will display detailed descriptions of execution.
