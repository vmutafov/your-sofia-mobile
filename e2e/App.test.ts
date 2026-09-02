import {expect, by, device, element} from 'detox'

describe('Home screen', () => {
  beforeAll(async () => {
    await device.launchApp()
  })

  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('app home screen loaded', async () => {
    try {
      await element(by.text('Напред')).tap()
    } catch (e) {
      console.warn('Getting started guide was probably already shown', e)
    }

    await expect(element(by.text('Начало'))).toBeVisible()
  })
})
