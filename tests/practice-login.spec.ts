import { test, expect } from '@playwright/test'
import { PracticeLogin } from './practice-login'

test.describe('login page', () => {
  test('correct details should log you in', async ({ page }) => {
    const loginPage = new PracticeLogin(page)
    await loginPage.goto()
    await loginPage.goodLogin()
    await expect(loginPage.securePageHeading).toBeVisible()
  })

  test('bad details should show you error', async ({ page }) => {
    const loginPage = new PracticeLogin(page)
    await loginPage.goto()
    await loginPage.badLogin()
    await expect(loginPage.errorPasswordMessage).toBeVisible()
  })
})
