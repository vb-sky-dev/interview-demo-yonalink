import { expect } from '@playwright/test';
import { HomePage } from "../pages/home-page";


export class HomeSteps {
    constructor(private readonly homePage: HomePage) { }

    async assertOnHomePage(): Promise<void> {
        console.log('Asserting we are on the home page...');
        await expect(this.homePage.title).toBeVisible();
        await expect(this.homePage.studiesLink).toBeVisible();
        await expect(this.homePage.reportsLink).toBeVisible();
    }

    async logout(): Promise<void> {
        console.log('Attempting logout...');

        await this.homePage.clickQaFrisbookMenuButton();

        try {
            await this.homePage.logoutLink.waitFor({ state: 'visible', timeout: 3000 });
        } catch (e) {
            console.warn('Logout link not visible after first click. Retrying...');
            await this.homePage.clickQaFrisbookMenuButton();
            await this.homePage.logoutLink.waitFor({ state: 'visible', timeout: 3000 });
        }

        await this.homePage.clickLogout();
        console.log('Logout click completed.');
    }

}
