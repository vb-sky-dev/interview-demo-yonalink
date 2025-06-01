import { test } from '../../src/fixtures/steps-holder-fixture';
import testData from '../../test_data/ui/login/login_credentials_test_data.json';

test.describe('Sign In Tests with Steps', { tag: ['@auth', '@sign_in'] }, () => {
  test('User can open sign-in page and see the title', async ({ signInSteps }) => {
    await signInSteps.openPage();
    await signInSteps.assertOnSignInPage();
  });
});

test.describe('Data-driven login tests with Steps', { tag: ['@auth', '@sign_in', '@data_driven'] }, () => {
  testData.forEach(({ login_username, login_password }, index) => {
    test(`Sign in #${index + 1} with ${login_username}`, async ({ signInSteps, homeSteps }) => {
      await signInSteps.openPage();
      await signInSteps.signIn(login_username, login_password);
      await homeSteps.assertOnHomePage();
    });
  });
});
