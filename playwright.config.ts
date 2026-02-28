import { defineConfig, devices } from '@playwright/test';
import { getEnvConfig } from './src/utils/env.config';

const { uiBaseURL } = getEnvConfig();

export default defineConfig({
  testDir: './src/tests',

  timeout: 30 * 1000,
  retries: 1,
  fullyParallel: true,

  use: {
    baseURL: uiBaseURL,
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },

  reporter: [
    ['list'],
    ['html'],
    ['allure-playwright']
  ],

  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'WebKit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});