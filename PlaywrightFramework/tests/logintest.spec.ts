import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageobjects/login-page'; 
import * as allure from "allure-js-commons";
import { getConfig } from '../helpers/configReader';
import {DashboardHomePage} from '../pageobjects/dashboardHome-page';

let loginPage: LoginPage;
let homepage: DashboardHomePage;

// Runs this before Each testcase
test.beforeEach(async ({ page },testInfo) => {
  loginPage = new LoginPage(page);
  await loginPage.navigateToLogin();
  }); 
  
// Does not create new page, when async ({ }) so you can use the page from beforeAll hook 
test('Login to AI Expert', async ({page}) => {
    await allure.displayName("Login to AI Expert");
    await allure.tags("Nightly", "Regression");
    await allure.severity("Critical");

    loginPage.printEnvs();

    await loginPage.fillLoginCreds();

    homepage = new DashboardHomePage(page);

    // Expand the sidebar (locator string text comes from the page object model locators map)
    await homepage.aiexpertButtonClick("aiExpertSidebarbutton");

    // Verify all the elements are in the sidebar
    await homepage.aiExpertVerifySidebarComponents();
    
    
});