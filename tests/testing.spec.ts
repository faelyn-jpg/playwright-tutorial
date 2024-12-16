import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('https://devacademy.co.nz/')
  await expect(page).toHaveTitle('Home | Dev Academy')
})

test('full time link works', async ({ page }) => {
  await page.goto('https://devacademy.co.nz/')

  await page.getByRole('link', { name: 'Full-time', exact: true }).click()

  await expect(page.getByText('Study online or in campus')).toBeVisible()
})

test('FAQ link works', async ({ page }) => {
  await page.goto('https://devacademy.co.nz/')
  await page.getByRole('link', { name: 'FAQs' }).click()
  await expect(
    page.getByText('Frequently Asked Questions (FAQs)')
  ).toBeVisible()
})

// test.describe('FAQ page', () => {

// })
