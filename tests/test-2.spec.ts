import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qaautomationlabs.com/');
  await expect(page.locator('body')).toContainText('QAAutomationLabs');
  await page.locator('.menu-trigger-icon').click();
  await page.getByRole('link', { name: '/ Blog' }).click();
  await expect(page.locator('h1')).toContainText('Blog');
});