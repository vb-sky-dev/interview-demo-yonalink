import { test, expect } from '../../src/fixtures/steps-holder-fixture';
import testData from '../../test_data/ui/login/login_credentials_test_data_negative.json';

test.describe('Failed Sign In with bad credentials Tests with Steps', { tag: ['@auth', '@sign_in', '@negative'] }, () => {
  testData.forEach(({ login_username, login_password, description }, index) => {
    test(`Failed sign in #${index + 1}: ${description}`, async ({ signInSteps, homeSteps }) => {
      await signInSteps.openPage();
      await signInSteps.signIn(login_username, login_password);

      await homeSteps.assertOnHomePage
    });
  });
});
