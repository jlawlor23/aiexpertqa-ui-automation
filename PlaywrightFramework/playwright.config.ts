// @ts-nocheck
const { devices } = require("@playwright/test");
import { defineConfig } from '@playwright/test';



export default defineConfig({
  
  testDir: "./tests",
  retries: 1,
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    timeout: 10000,
  },
  reporter: [["line"], ["allure-playwright"]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
use: {
  headless: false, // set to false if you want to see the UI
  screenshot: "only-on-failure",
  fullyParallel: true,
  trace: "on-first-retry" //capture trace when test fails
},
projects: [
  {
    name: 'Chromium',
      use: {
            browserName: "chromium",
            viewport: null,
            launchOptions: {
              args: ['--start-maximized']
            }
          }
    },
    {
      name: 'Firefox',
      use: {
            browserName: "firefox",
            viewport: null,
            launchOptions: {
              args: ['--start-maximized']
            }
         }

    },
    {
      name: 'Safari',
      use: {
            browserName: "webkit",
            viewport: null,
            launchOptions: {
              args: ['--start-maximized']
            }
         }

    }



]


  
  /* browserName: "chromium",
    headless: false,
    viewport: null,
        launchOptions: {
          args: ['--start-maximized']
        },
    screenshot: "on",
    trace: "retain-on-failure", //off,on
} */


});


