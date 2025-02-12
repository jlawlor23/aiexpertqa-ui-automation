import { expect, Page } from "@playwright/test";
import { getConfig } from '../helpers/configReader';

export class LoginPage {

    private page: Page
    private signInbutton = () => this.page.getByRole('button', { name: 'Log In', exact: true });
    private userName = () => this.page.getByRole('textbox', { name: 'Business Email' });
    private password = () => this.page.getByRole('textbox', { name: 'Password' });
    private env = process.env.TEST_ENV || 'development';
    private config = getConfig(this.env);

    constructor(page: Page) {
        this.page = page;
    
    }

    public async navigateToLogin() {
        await this.page.goto(this.config.APP_URL);
    }

    public async fillLoginCreds() {
        await this.userName().fill(this.config.USERNAME);
        await this.password().fill(this.config.PASSWORD);
        await this.signInbutton().click();
    }


    public async printEnvs() {
        console.log('page URL: ', this.config.APP_URL);
        console.log('page Username: ', this.config.USERNAME);
        console.log('page Password: ', this.config.PASSWORD);
    }



}