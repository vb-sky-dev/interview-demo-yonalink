import { test, expect } from '../../src/fixtures/pages-holder-fixture';
import testData from '../../test_data/ui/login/login_credentials_test_data.json';


test.describe('Sign In Tests', { tag: ['@auth', '@sign_in'] }, () => {
  test('User can open sign-in page and see the title', async ({ signInPage }) => {
    await signInPage.open();

    const titleVisible = await signInPage.title.isVisible();
    expect(titleVisible).toBe(true);

    const titleText = await signInPage.title.textContent();
    expect(titleText).toContain('Sign in - EDC');
  });

});

test.describe('Data-driven login tests', { tag: ['@auth', '@sign_in', '@data_driven'] }, () => {
  testData.forEach(({ login_username, login_password }, index) => {
    test(`Sign in #${index + 1} with ${login_username}`, async ({ signInPage, homePage }) => {
      
      await signInPage.open();
      await signInPage.fillEmail(login_username);
      await signInPage.fillPassword(login_password);
      await signInPage.clickSignInButton();

      await expect(homePage.title).toBeVisible();
      await expect(homePage.title).toHaveText('Yonalink');

      await expect(homePage.studiesLink).toBeVisible();
      await expect(homePage.reportsLink).toBeVisible();
    });
  });
});




