import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageobjects/login-page'; 
import * as allure from "allure-js-commons";
import { getConfig } from '../helpers/configReader';
import {ConversationWindowPage} from '../pageobjects/conversationWindow-page';
import {DashboardHomePage} from '../pageobjects/dashboardHome-page';

let conversationWindow: ConversationWindowPage;
let loginPage: LoginPage;

// Runs this before Each testcase
test.beforeEach(async ({ page },testInfo) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateToLogin();
    await loginPage.fillLoginCreds();
    const homepage = new DashboardHomePage(page);
    // Expand the sidebar (locator string text comes from the page object model locators map)
    await homepage.aiexpertButtonClick("aiExpertSidebarbutton");
  }); 
  
// Does not create new page, when async ({ }) so you can use the page from beforeAll hook 
test('Ask a single question and validate the response', async ({page}) => {
    await allure.displayName("Ask a single question and validate the response");
    await allure.tags("Nightly", "Regression");
    await allure.severity("Critical");

    conversationWindow = new ConversationWindowPage(page);
    // Ask a question - parames (Question, Expected text to be contained in response)
    await conversationWindow.aiExpertAskQuestion("What is co-pilot?","CoPilot is an AIOps solution");
   
});