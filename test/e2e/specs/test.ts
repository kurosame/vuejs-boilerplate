import path from 'path'
import puppeteer, { Browser, Page } from 'puppeteer'

jest.setTimeout(30000)

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
  await page.goto('http://localhost:9000')
})

test('Click the add-count, update the count', async () => {
  await page.click('[data-test="add-count"]')

  await page.screenshot({
    path: path.join(__dirname, '__screenshots__', 'add-count.png'),
    fullPage: true
  })

  expect(await page.$eval('[data-test="count"]', v => v.textContent)).toEqual(
    '1'
  )
})

test('Click the add-axios-count, update the axiosCount', async () => {
  await page.click('[data-test="add-axios-count"]')
  await page.waitFor(1000)

  await page.screenshot({
    path: path.join(__dirname, '__screenshots__', 'add-axios-count.png'),
    fullPage: true
  })

  expect(
    await page.$eval('[data-test="axios-count"]', v => v.textContent)
  ).toEqual('2')
})

test('Click the add-async-await-count, update the asyncAwaitCount', async () => {
  await page.click('[data-test="add-async-await-count"]')
  await page.waitFor(1000)

  await page.screenshot({
    path: path.join(__dirname, '__screenshots__', 'add-async-await-count.png'),
    fullPage: true
  })

  expect(
    await page.$eval('[data-test="async-await-count"]', v => v.textContent)
  ).toEqual('3')
})
