import { test } from '../../src/fixtures/steps-holder-fixture';
import testData from '../../test_data/ui/login/login_credentials_test_data.json';

testData.forEach(({ login_username, login_password }, index) => {
  test.describe(`Authenticated user #${index + 1} (${login_username})`, () => {

    test.beforeEach(async ({ signInSteps, homeSteps }) => {
      await signInSteps.openPage();
      await signInSteps.signIn(login_username, login_password);
      await homeSteps.assertOnHomePage();
    });

    test(`User can log out and return to Sign In page`, async ({ homeSteps, signInSteps }) => {
      await homeSteps.logout();
      await signInSteps.assertOnSignInPage();
    });
  });
  
});
