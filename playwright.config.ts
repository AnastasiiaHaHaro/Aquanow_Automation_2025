import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config(); 

export default defineConfig({
  workers: 1,
  testDir: './tests/ui',
  use: {
    headless: false, 
    baseURL: 'https://admin-dev.aquanow.io',
    extraHTTPHeaders: {
      "Content-Type": "application/x-amz-json-1.1",
    },
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});