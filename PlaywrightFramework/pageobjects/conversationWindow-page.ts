import { expect, Locator, Page } from "@playwright/test";
import { getConfig } from '../helpers/configReader';
import * as allure from "allure-js-commons";

export class ConversationWindowPage {

    private page: Page

    private locators: Record<string, Locator>;

    constructor(page: Page) {
        this.page = page;
        this.locators = {
             aiExpertChatInput:               this.page.getByTestId("chat__input"),
             aiExpertChatSend:                this.page.getByTestId("chat__send-message-btn"),
             aiExpertChatFirstResponseMsg:    this.page.getByTestId("interaction__response-message--interaction-0")
        }
    
    }

    // Generic click function
    async aiexpertButtonClick(buttonName: string): Promise<void> {
        const button = this.locators[buttonName];
        if (!button) {
            throw new Error(`Button '${buttonName}' not found in DashboardHomePage locators.`);
        }
        await button.click();
    }


    public async aiExpertAskQuestion(question : string, containedText : string) {  
        
        await this.locators["aiExpertChatInput"].fill(question);
        await this.locators["aiExpertChatSend"].click();
        const responseMsg = this.locators["aiExpertChatFirstResponseMsg"];
        await expect(responseMsg).toContainText(containedText);
    }


}