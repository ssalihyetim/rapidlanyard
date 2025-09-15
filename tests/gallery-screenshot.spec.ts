import { test } from '@playwright/test';

test('capture lanyards page gallery screenshot', async ({ page }) => {
  // Navigate to the lanyards page
  await page.goto('http://localhost:3000/lanyards');
  
  // Wait for images to load
  await page.waitForLoadState('networkidle');
  
  // Take a screenshot of the product gallery section
  const gallerySection = page.locator('.lg\\:col-span-2').first();
  await gallerySection.screenshot({ path: '/Users/salihyetim/Desktop/TalepGetir/Nurgun/rapidlanyard/gallery-screenshot.png' });
  
  // Take a full page screenshot too
  await page.screenshot({ path: '/Users/salihyetim/Desktop/TalepGetir/Nurgun/rapidlanyard/full-page-screenshot.png', fullPage: true });
});