import puppeteer from 'puppeteer'

let browser: any
let page: any

describe('getters', () => {
  describe('counter.ts', () => {
    beforeAll(async () => {
      browser = await puppeteer.launch({ headless: false })
      page = await browser.newPage()
    })
    afterAll(() => {
      browser.close()
    })

    test('count', async () => {
      await page.goto('http://localhost:9000')
      await page.click('.count')
    })
  })
})
