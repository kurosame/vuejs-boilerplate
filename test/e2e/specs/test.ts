import path from 'path'
import puppeteer, { Browser, Page } from 'puppeteer'

let browser: Browser
let page: Page

beforeAll(async () => {
  browser =
    process.env.CI === 'true'
      ? await puppeteer.launch({
          headless: true,
          timeout: 0,
          args: ['--no-sandbox']
        })
      : await puppeteer.launch({ headless: false, timeout: 0 })
  page = await browser.newPage()
})
afterAll(() => {
  browser.close()
})

beforeEach(async () => {
  await page.goto('http://localhost:9000', { timeout: 10000 })
})

test('Click the button.add-value, update the count', async () => {
  await page.click('.add-value')

  await page.screenshot({
    path: path.join(__dirname, '__screenshots__', 'add-value.png'),
    fullPage: true
  })

  expect(await page.$eval('.count', v => v.textContent)).toEqual('1')
})

test('Click the button.axios-sample, update the axiosCount', async () => {
  await page.click('.axios-sample')
  await page.waitFor(1000)

  await page.screenshot({
    path: path.join(__dirname, '__screenshots__', 'axios-sample.png'),
    fullPage: true
  })

  expect(await page.$eval('.axios-count', v => v.textContent)).toEqual('2')
})

test('Click the button.async-await-sample, update the asyncAwaitCount', async () => {
  await page.click('.async-await-sample')
  await page.waitFor(1000)

  await page.screenshot({
    path: path.join(__dirname, '__screenshots__', 'async-await-sample.png'),
    fullPage: true
  })

  expect(await page.$eval('.async-await-count', v => v.textContent)).toEqual(
    '3'
  )
})
