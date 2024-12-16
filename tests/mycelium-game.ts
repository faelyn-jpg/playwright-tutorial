import { expect, type Locator, type Page } from '@playwright/test'

export class MyCeliumGame {
  readonly page: Page
  readonly fungipediaLink: Locator
  readonly fungipediaTitle: Locator
  readonly pomLink: Locator
  readonly indexList: Locator

  constructor(page: Page) {
    this.page = page
    this.fungipediaLink = page.locator('button', { hasText: 'Fungipedia' })
    this.fungipediaTitle = page.locator('h1', {
      hasText: 'Welcome to Fungipedia',
    })
    this.indexList = page.locator('div.underline > button')
    this.pomLink = page.locator('button', {
      hasText: "Lover's redcap",
    })
  }

  async goto() {
    await this.page.goto('https://my-celium.devacademy.nz/')
  }
  async fungipedia() {
    await this.fungipediaLink.first().click()
    await expect(this.fungipediaTitle).toBeVisible()
  }

  async fungipediaBook() {
    await this.fungipedia()
    await this.pomLink.click()
  }
}
