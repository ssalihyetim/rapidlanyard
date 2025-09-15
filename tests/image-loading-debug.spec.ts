import { test, expect } from '@playwright/test';

test('debug image loading on lanyards page', async ({ page }) => {
  const networkErrors: string[] = [];
  const consoleErrors: string[] = [];
  
  // Capture network failures
  page.on('requestfailed', request => {
    networkErrors.push(`Failed request: ${request.url()} - ${request.failure()?.errorText}`);
  });
  
  // Capture console errors
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });
  
  // Navigate to the lanyards page
  await page.goto('http://localhost:3000/lanyards');
  
  // Wait for the page to load
  await page.waitForLoadState('networkidle');
  
  // Check if the Product Gallery section exists
  const gallerySection = page.locator('text=Product Gallery');
  await expect(gallerySection).toBeVisible();
  console.log('✓ Product Gallery section is visible');
  
  // Check the main image container
  const mainImageContainer = page.locator('.aspect-w-16.aspect-h-12').first();
  await expect(mainImageContainer).toBeVisible();
  console.log('✓ Main image container is visible');
  
  // Check if main image element exists
  const mainImage = page.locator('.aspect-w-16.aspect-h-12 img').first();
  const imageExists = await mainImage.count();
  console.log(`Main image elements found: ${imageExists}`);
  
  if (imageExists > 0) {
    const imageSrc = await mainImage.getAttribute('src');
    const imageAlt = await mainImage.getAttribute('alt');
    console.log(`Main image src: ${imageSrc}`);
    console.log(`Main image alt: ${imageAlt}`);
    
    // Check if image is actually loaded
    const isVisible = await mainImage.isVisible();
    console.log(`Main image is visible: ${isVisible}`);
  }
  
  // Check thumbnail container
  const thumbnailContainer = page.locator('.grid.grid-cols-2.md\\:grid-cols-5.gap-4');
  await expect(thumbnailContainer).toBeVisible();
  console.log('✓ Thumbnail container is visible');
  
  // Check thumbnail images
  const thumbnails = page.locator('.aspect-w-4.aspect-h-3 img');
  const thumbnailCount = await thumbnails.count();
  console.log(`Thumbnail images found: ${thumbnailCount}`);
  
  // Check each thumbnail
  for (let i = 0; i < thumbnailCount; i++) {
    const thumb = thumbnails.nth(i);
    const thumbSrc = await thumb.getAttribute('src');
    const thumbVisible = await thumb.isVisible();
    console.log(`Thumbnail ${i}: src=${thumbSrc}, visible=${thumbVisible}`);
  }
  
  // Check for Tailwind aspect ratio classes
  const aspectRatioElements = page.locator('[class*="aspect-w-"]');
  const aspectRatioCount = await aspectRatioElements.count();
  console.log(`Elements with aspect ratio classes: ${aspectRatioCount}`);
  
  // Output any network or console errors
  console.log('Network errors:', networkErrors);
  console.log('Console errors:', consoleErrors);
  
  // Take a screenshot for debugging
  await page.screenshot({ 
    path: '/Users/salihyetim/Desktop/TalepGetir/Nurgun/rapidlanyard/debug-screenshot.png', 
    fullPage: true 
  });
  
  // Check if images actually load by waiting for them
  try {
    await page.waitForFunction(() => {
      const mainImg = document.querySelector('.aspect-w-16.aspect-h-12 img') as HTMLImageElement;
      return mainImg && mainImg.complete && mainImg.naturalHeight !== 0;
    }, { timeout: 5000 });
    console.log('✓ Main image loaded successfully');
  } catch (error) {
    console.log('✗ Main image failed to load:', error);
  }
});