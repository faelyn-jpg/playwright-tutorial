import { test, expect } from '@playwright/test'
import { MyCeliumGame } from './mycelium-game'

test('fungipedia should have index', async ({ page }) => {
  const gameMyCelium = new MyCeliumGame(page)
  await gameMyCelium.goto()
  await gameMyCelium.fungipedia()
  await expect(gameMyCelium.indexList).toHaveText([
    `Lover's redcap`,
    `Hollow Snakehead`,
    `Fool's Bolete`,
    `Cerulean Bonnet`,
    `Cumulo Puffball`,
    `Silly-kitty Bolete`,
  ])
})

test("should show Lover's redcap information", async ({ page }) => {
  const gameMyCelium = new MyCeliumGame(page)
  await gameMyCelium.goto()
  await gameMyCelium.fungipediaBook()
  await expect(page.locator('p.pb-2')).toContainText(
    'Found within moist meadows,'
  )
})
