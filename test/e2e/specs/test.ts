import puppeteer, { Browser, Page } from 'puppeteer'

let browser: Browser
let page: Page

beforeAll(async () => {
  browser = await puppeteer.launch({ headless: false, timeout: 0 })
  page = await browser.newPage()

  await page.goto('http://localhost:9000')
})
afterAll(() => {
  browser.close()
})

test('Click the button.add-value, update the count', async () => {
  await page.click('.add-value')

  expect(await page.$eval('.count', v => v.textContent)).toEqual('1')
})

test('Click the button.axios-sample, update the axiosCount', async () => {
  await page.click('.axios-sample')
  await page.waitFor(1000)

  expect(await page.$eval('.axios-count', v => v.textContent)).toEqual('2')
})

test('Click the button.async-await-sample, update the asyncAwaitCount', async () => {
  await page.click('.async-await-sample')
  await page.waitFor(1000)

  expect(await page.$eval('.async-await-count', v => v.textContent)).toEqual(
    '3'
  )
})
