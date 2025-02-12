import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageobjects/login-page'; 
import * as allure from "allure-js-commons";
import { getConfig } from '../helpers/configReader';

let loginPage: LoginPage;

// Runs this before Each testcase
test.beforeEach(async ({ page },testInfo) => {
  loginPage = new LoginPage(page);
  await loginPage.navigateToLogin();
  }); 
  
// Does not create new page, when async ({ }) so you can use the page from beforeAll hook 
test('Login to AI Expert', async ({ }) => {
    await allure.displayName("Login to AI Expert");
    await allure.tags("Nightly", "Regression");
    await allure.severity("Critical");

    loginPage.printEnvs();

    await loginPage.fillLoginCreds();
    
});