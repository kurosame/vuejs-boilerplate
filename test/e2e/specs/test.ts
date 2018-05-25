import puppeteer, { Browser, Page } from 'puppeteer'

let browser: Browser
let page: Page

describe('getters', () => {
  describe('counter.ts', () => {
    beforeAll(async () => {
      browser = await puppeteer.launch({ headless: false, timeout: 0 })
      page = await browser.newPage()

      await page.goto('http://localhost:9000')
    })
    afterAll(() => {
      browser.close()
    })

    test('count', async () => {
      await page.click('.add-value')

      expect(await page.$eval('.count', v => v.textContent)).toEqual('1')
    })

    test('axiosCount', async () => {
      await page.click('.axios-sample')
      await page.waitFor(1000)

      expect(await page.$eval('.axios-count', v => v.textContent)).toEqual('2')
    })

    test('asyncAwaitCount', async () => {
      await page.click('.async-await-sample')
      await page.waitFor(1000)

      expect(
        await page.$eval('.async-await-count', v => v.textContent)
      ).toEqual('3')
    })
  })
})
