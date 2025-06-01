import { test as base, expect } from '@playwright/test';
import { SignInPage } from '../pages/sign-in-page';
import { HomePage } from '../pages/home-page'; 

export type PagesHolderFixture = {
  signInPage: SignInPage;
  homePage: HomePage; 
};

export const test = base.extend<PagesHolderFixture>({
  signInPage: async ({ page }, use) => {
    await use(new SignInPage(page));
  },
  homePage: async ({ page }, use) => { 
    await use(new HomePage(page));
  },
});

export { expect };
