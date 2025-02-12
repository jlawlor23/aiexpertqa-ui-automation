// @ts-nocheck
const { devices } = require("@playwright/test");
import { defineConfig } from '@playwright/test';



export default defineConfig({
  
  testDir: "./tests",
  retries: 2,
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    timeout: 10000,
  },
  reporter: [["line"], ["allure-playwright"]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
use: {

  //baseURL: process.env.BASE_URL || 'https://google.com',
  baseURL: process.env.PLAYWRIGHT_ENV === 'ep1_ws2' ? 'https://prod.example.com' : 'https://staging.example.com',
  
  browserName: "chromium",
    headless: false,
    viewport: null,
        launchOptions: {
          args: ['--start-maximized']
        },
    screenshot: "on",
    trace: "retain-on-failure", //off,on
}


})


