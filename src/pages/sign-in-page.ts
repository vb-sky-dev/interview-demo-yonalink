import { Page, Locator } from '@playwright/test';
import { BasePage } from './base-page';

export class SignInPage extends BasePage {

    private pageName = 'Sign_in Page: ';

    // Locators
    readonly title: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly mfaInput: Locator;

    // Buttons Locators
    readonly signInButton: Locator;

    // Links Locators
    readonly clickHereIfYouEnableMFA: Locator;
    readonly forgotPasswordLink: Locator;
    readonly didntReceiveConfirmationInstructions: Locator;
    readonly didntReceiveUnlockInstructions: Locator;

    // Messages
    readonly errorMessage: Locator;


    constructor(page: Page) {
        super(page)

        this.title = page.locator('//h2[normalize-space()="Sign in - EDC"]');
        this.emailInput = page.locator('//input[@name="user[email]"]');
        this.passwordInput = page.locator('//input[@name="user[password]"]');
        this.mfaInput = page.locator('//input[@name="user[otp_attempt]"]');
        this.signInButton = page.locator('//input[@type="submit" and @value="Sign in"]');
        this.clickHereIfYouEnableMFA = page.locator('//a[text()="Click here if you have enabled MFA"]');
        this.forgotPasswordLink = page.locator('//a[text()="Forgot your password?"]');
        this.didntReceiveConfirmationInstructions = page.locator('//a[text()="Didn\'t receive confirmation instructions?"]');
        this.didntReceiveUnlockInstructions = page.locator('//a[text()="Didn\'t receive unlock instructions?"]');
        this.errorMessage = page.locator('div.toast-body.bg-danger');

    }

    async open(): Promise<void> {
        await this.goTo();
    }

    async fillEmail(email: string): Promise<void> {
        await this.emailInput.fill(email);
    }

    async fillPassword(password: string): Promise<void> {
        await this.passwordInput.fill(password);
    }

    async isMfaInputVisible(): Promise<boolean> {
        return await this.mfaInput.isVisible();
    }

    async clickSignInButton(): Promise<void> {
        await this.safeClick(this.signInButton, `${this.pageName}'Sign In button'`);
    }

    async clickForgotPasswordLink(): Promise<void> {
        await this.safeClick(this.forgotPasswordLink, `${this.pageName}'Forgot Password link'`);
    }

    async clickConfirmationInstructionsLink(): Promise<void> {
        await this.safeClick(this.didntReceiveConfirmationInstructions,
            `${this.pageName}'Confirmation Instructions link'`);
    }

    async clickUnlockInstructionsLink(): Promise<void> {
        await this.safeClick(this.didntReceiveUnlockInstructions,
            `${this.pageName}'Unlock Instructions link'`);
    }

    async clickMfaHelpLink(): Promise<void> {
        await this.safeClick(this.clickHereIfYouEnableMFA, `${this.pageName}'MFA Help link'`);
    }

}

