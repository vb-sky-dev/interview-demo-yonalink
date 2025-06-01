import { Locator, Page } from '@playwright/test';
import { BasePage } from './base-page';

export class HomePage extends BasePage {
  private readonly pageName = 'Home Page: ';

  // Top Navigation
  readonly studiesLink: Locator;
  readonly reportsLink: Locator;
  readonly title: Locator;

  // User menu
  readonly qaFrisbookMenuButton: Locator;
  readonly logoutLink: Locator;
  readonly settingsLink: Locator;
  readonly aboutLink: Locator;

  constructor(page: Page) {
    super(page);

    // Navigation
    this.studiesLink = page.locator('//a[div[text()="Studies"]]');
    this.reportsLink = page.locator('//a[div[text()="Reports"]]');
    this.title = page.locator('//span[text()="Yonalink"]').first();

    // Dropdown menu
    this.qaFrisbookMenuButton = page.locator('//button[contains(@class, "dropdown-toggle") or contains(@data-bs-toggle, "dropdown")]');
    this.logoutLink = page.locator('//a[@href="/users/sign_out" and contains(text(), "Logout")]');
    this.settingsLink = page.locator('//a[contains(@class, "dropdown-item") and contains(text(), "Settings")]');
    this.aboutLink = page.locator('//a[contains(@class, "dropdown-item") and contains(text(), "About")]');
  }

    async clickQaFrisbookMenuButton(): Promise<void> {
    await this.safeClick(this.qaFrisbookMenuButton, 'User menu');
  }

  async clickLogout(): Promise<void> {
    await this.safeClick(this.logoutLink, 'Logout link');
  }

}
