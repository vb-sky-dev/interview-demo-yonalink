# Playwright UI Automation – Login Flow (TypeScript)

This project demonstrates a robust and maintainable **end-to-end testing framework** built with **Playwright + TypeScript**, using the **Steps pattern**, data-driven testing, and Allure reports.

---

## ✅ Key Features

- **Framework**: Playwright with TypeScript
- **Test Structure**: Page Object Model (POM) + Steps classes
- **Test Scenarios**:
  - Successful logins using valid credentials
  - Negative login attempts (invalid emails, wrong passwords, empty fields)
  - Session-based scenarios with login + logout validation
- **Tagging Support**: Use `@auth`, `@sign_in`, `@data_driven`, `@negative`, etc.
- **Reporting**: Allure report integration with custom step tracking

---

## 🧭 Step Definitions

Tests use step classes to encapsulate business logic:

### `SignInSteps` includes:

- `openPage()` — navigate to the sign-in screen
- `signIn(email, password)` — fill and submit login form
- `assertOnSignInPage()` — check that user remains on the sign-in page
- `assertErrorVisible()` — validate visible error message (toast)

### `HomeSteps` includes:

- `assertOnHomePage()` — verify the home screen loaded (title, nav links)
- `logout()` — perform logout from dropdown and confirm redirection

This architecture separates **test logic** from **interaction logic**, ensuring readability and reusability.

---

## 🧪 Test Coverage

The test suite includes:

- **Basic UI validation**
  - Page title and inputs presence
- **Positive tests**
  - Sign in with valid credentials from JSON
  - Redirection to the home page
- **Negative tests**
  - Invalid email format
  - Wrong password
  - Empty email/password fields
  - Assertion of error message: `"Invalid Email or password."`
- **Session control**
  - Login via `beforeEach()`
  - Logout and return to sign-in screen

---

## 🚀 How to Run the Tests

### 1. Install dependencies

```bash
npm install
```

## 🚀 How to Run the Tests

### Step 1 — Add valid credentials

Before running tests, open the following file and enter **working credentials** for the application under test:
interview-demo-yonalink/interview-demo-yonalink/test_data/ui/login/login_credentials_test_data.json

Example:
```json
[
  {
    "login_username": "your-email@example.com",
    "login_password": "yourSecurePassword123!"
  },
  {
    "login_username": "your-email@example.com",
    "login_password": "yourSecurePassword123!"
  }
]
```


### Run all tests
```bash
npx playwright test
```
### Run only tests with a specific tag

You can target test groups using tags like @negative, @auth, @sign_in, etc.
```bash
npx playwright test --grep "@negative"
```
### Run tests with UI (debug mode)

This opens a visible browser window and enables step-by-step inspection:
```bash
npx playwright test --headed --debug
```
---

## 📊 Allure Report Integration

### Install Allure CLI (globally, once)
```bash
npm install -g allure-commandline
```
### Run the tests and collect results
```bash
npx playwright test
```
### Generate and view the Allure report
```bash
allure generate ./allure-results --clean -o ./allure-report  
allure open ./allure-report
```
---

## ✅ Test Coverage Summary

- ✅ Positive Sign In  
  Confirms valid credentials lead to the home page

- ❌ Negative Sign In  
  Uses invalid inputs and asserts that the proper error appears:  
  "Invalid Email or password."

- 🔁 Session Handling  
  Logs in, then logs out, verifying return to the sign-in page

---

## 💡 Key Features

- Steps Pattern (e.g. SignInSteps, HomeSteps) for clean business logic
- Page Object Model for maintainability
- Tags (@sign_in, @negative, etc.) for test filtering
- Data-driven approach using external JSON
- Allure reporting for rich, step-by-step feedback

---

This test suite is designed to demonstrate scalable TypeScript + Playwright automation, suitable for production-ready workflows.
