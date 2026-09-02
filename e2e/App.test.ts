import {expect, by, device, element} from 'detox'

describe('Home screen', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('shows a visible button', async () => {
    await expect(element(by.text('Open Pokedex'))).toBeVisible()
  })
})
