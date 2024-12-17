import { expect, type Locator, type Page } from '@playwright/test'

export class PracticeLogin {
  readonly page: Page
  readonly loginTitle: Locator
  readonly loginButton: Locator
  readonly errorPasswordMessage: Locator
  readonly usernameField: Locator
  readonly passwordField: Locator
  readonly securePageHeading: Locator

  constructor(page: Page) {
    this.page = page
    this.loginTitle = page.locator('h1', {
      hasText: 'Test Login page for Automation Testing Practice',
    })
    this.usernameField = page.getByLabel('Username')
    this.passwordField = page.getByLabel('Password')
    this.errorPasswordMessage = page.getByText('Your password is invalid!')
    this.loginButton = page.getByRole('button', { name: 'Login', exact: true })
    this.securePageHeading = page.getByRole('heading', {
      name: 'Secure Area page for Automation Testing Practice',
      exact: true,
    })
  }

  async goto() {
    await this.page.goto('https://practice.expandtesting.com/login')
  }
  async goodLogin() {
    await expect(this.loginTitle).toBeVisible()
    await this.usernameField.fill('practice')
    await this.passwordField.fill('SuperSecretPassword!')
    await this.loginButton.click()
  }
  async badLogin() {
    await expect(this.loginTitle).toBeVisible()
    await this.usernameField.fill('practice')
    await this.passwordField.fill('Superpassword!')
    await this.loginButton.click()
  }
}
