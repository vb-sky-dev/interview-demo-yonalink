import { test as base, expect } from '@playwright/test';
import { SignInPage } from '../pages/sign-in-page';
import { HomePage } from '../pages/home-page';
import { SignInSteps } from '../steps/sign-in-steps';
import { HomeSteps } from '../steps/home-steps';

export type StepsHolderFixture = {
  signInPage: SignInPage;
  homePage: HomePage;
  signInSteps: SignInSteps;
  homeSteps: HomeSteps;
};

export const test = base.extend<StepsHolderFixture>({
  signInPage: async ({ page }, use) => {
    await use(new SignInPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  signInSteps: async ({ signInPage }, use) => {
    await use(new SignInSteps(signInPage));
  },
  homeSteps: async ({ homePage }, use) => {
    await use(new HomeSteps(homePage));
  },
});

export { expect } from '@playwright/test';

