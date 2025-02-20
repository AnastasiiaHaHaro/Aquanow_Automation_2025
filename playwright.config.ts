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
      "Content-Type": "application/json",
    },
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});