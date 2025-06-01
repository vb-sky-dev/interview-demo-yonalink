import { expect } from '@playwright/test';
import { SignInPage } from '../pages/sign-in-page';

export class SignInSteps {
    private readonly signInPage: SignInPage;

    constructor(signInPage: SignInPage) {
        this.signInPage = signInPage;
    }

    async openPage(): Promise<void> {
        await this.signInPage.open();
        console.log('Opened Sign In page.');
    }

    async assertOnSignInPage(): Promise<void> {
        for (let attempt = 0; attempt < 3; attempt++) {
            try {
                await expect(this.signInPage.title).toBeVisible({ timeout: 1000 });
                return;
            } catch (e) {
                console.warn(`Attempt ${attempt + 1} failed, retrying...`);
                await this.signInPage.page.waitForTimeout(1000);
            }
        }
        throw new Error('Sign-in page was not visible after logout.');
    }


    async signIn(email: string, password: string): Promise<void> {
        await this.signInPage.fillEmail(email);
        console.log('Filled in email input.');

        await this.signInPage.fillPassword(password);
        console.log('Filled in password input.');

        await this.signInPage.clickSignInButton();
        console.log('Clicked on Sign In button.');
    }

    async switchToMfaOption(): Promise<void> {
        console.log('Clicking on MFA help link...');
        await this.signInPage.clickMfaHelpLink();

        const isVisible = await this.signInPage.isMfaInputVisible();
        console.log(`MFA input visibility: ${isVisible}`);

        expect(isVisible).toBe(true);
        console.log('Verified that MFA input is visible.');
    }

    async goToRestorePasswordPage(): Promise<void> {
        console.log('Navigating to Forgot Password page...');
        await this.signInPage.clickForgotPasswordLink();
    }

    async goToConfirmationInstructionsPage(): Promise<void> {
        console.log('Navigating to Confirmation Instructions page...');
        await this.signInPage.clickConfirmationInstructionsLink();
    }

    async goToUnlockInstructionsPage(): Promise<void> {
        console.log('Navigating to Unlock Instructions page...');
        await this.signInPage.clickUnlockInstructionsLink();
    }

    async assertErrorVisible(): Promise<void> {
        console.log('Asserting error message...');
        await expect(this.signInPage.errorMessage).toBeVisible({ timeout: 5000 });
    }
}

