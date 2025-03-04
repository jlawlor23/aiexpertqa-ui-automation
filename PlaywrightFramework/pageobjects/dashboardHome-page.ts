import { expect, Locator, Page } from "@playwright/test";
import { getConfig } from '../helpers/configReader';
import * as allure from "allure-js-commons";

export class DashboardHomePage {

    private page: Page

    private locators: Record<string, Locator>;

    constructor(page: Page) {
        this.page = page;
        this.locators = {
             aiExpertSidebarbutton:           this.page.getByTestId("side-menu__pendo_AIExpert-btn"),
             aiExpertSidebarNewConversation:  this.page.getByTestId("side-menu__new-conversation-btn"),
             aiExpertSidebarConvHistory:      this.page.getByTestId("conversation-history__btn"),
             aiExpertSidebarSavedPrompts:     this.page.getByTestId("saved-prompts__btn"),
             aiExpertSidebarCanvasesOpen:     this.page.getByTestId("side-menu__dashboard-conversation-history-btn"),
             aiExpertSidebarSettings:         this.page.getByTestId("side-menu__advanced-settings-btn"),
             aiExpertChatInput:               this.page.getByTestId("chat__input"),
             aiExpertChatSend:                this.page.getByTestId("chat__send-message-btn"),
             aiExpertSidebarHelp:             this.page.getByTestId("side-menu__pendo-help-btn")
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


    public async aiExpertVerifySidebarComponents() {  
        
        await expect(this.locators["aiExpertSidebarNewConversation"], 'AI Expert Sidebar button is not appearing').toBeVisible();
        await expect(this.locators["aiExpertSidebarConvHistory"], 'AI Expert Sidebar Conversation History button is not appearing').toBeVisible();
        await expect(this.locators["aiExpertSidebarSavedPrompts"], 'AI Expert Sidebar Saved Prompts button is not appearing').toBeVisible();
        await expect(this.locators["aiExpertSidebarCanvasesOpen"], 'AI Expert Sidebar Canvas button is not appearing').toBeVisible();
        await expect(this.locators["aiExpertSidebarSettings"], 'AI Expert Sidebar Settings button is not appearing').toBeVisible();
        await expect(this.locators["aiExpertSidebarHelp"], 'AI Expert Sidebar Help button is not appearing').toBeVisible();
        await expect(this.locators["aiExpertChatInput"], 'AI Expert Chat Input is not appearing').toBeVisible();
        await expect(this.locators["aiExpertChatSend"], 'AI Expert Chat Send Message Button is not appearing').toBeVisible();
        
    }


}