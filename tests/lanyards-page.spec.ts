import { test, expect } from '@playwright/test';

test.describe('Lanyards Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the lanyards page before each test
    await page.goto('http://localhost:3000/lanyards');
  });

  test('should load the page without errors', async ({ page }) => {
    // Check that the page loads successfully
    await expect(page).toHaveTitle(/.*Lanyard.*|.*RapidLanyard.*/);
    
    // Check for any console errors
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    
    // Wait for the page to fully load
    await page.waitForLoadState('networkidle');
    
    // Check that no critical errors occurred
    expect(errors.filter(error => 
      !error.includes('Failed to load resource') && 
      !error.includes('favicon')
    )).toHaveLength(0);
  });

  test('should display the header correctly', async ({ page }) => {
    // Check that header is visible
    await expect(page.locator('header')).toBeVisible();
    
    // Check for main heading
    await expect(page.locator('h1')).toContainText('Custom Lanyards');
    
    // Check for pricing information
    await expect(page.locator('text=$0.11')).toBeVisible();
  });

  test('should display breadcrumbs navigation', async ({ page }) => {
    // Check breadcrumbs are visible
    await expect(page.locator('[aria-label="Breadcrumb"]')).toBeVisible();
    
    // Check breadcrumb links using more specific selectors
    await expect(page.locator('[aria-label="Breadcrumb"] >> text=Home')).toBeVisible();
    await expect(page.locator('[aria-label="Breadcrumb"] >> text=Lanyards')).toBeVisible();
  });

  test('should display the product gallery section', async ({ page }) => {
    // Check that the Product Gallery section is visible
    await expect(page.locator('text=Product Gallery')).toBeVisible();
    
    // Check that the gallery container is present
    const galleryContainer = page.locator('.lg\\:col-span-2');
    await expect(galleryContainer).toBeVisible();
    
    // Check that the sticky gallery wrapper is present
    const galleryWrapper = page.locator('.sticky.top-4');
    await expect(galleryWrapper).toBeVisible();
  });

  test('should display the main featured image', async ({ page }) => {
    // Wait for images to load
    await page.waitForLoadState('networkidle');
    
    // Check that the main image container is present
    const mainImageContainer = page.locator('.aspect-w-16.aspect-h-12').first();
    await expect(mainImageContainer).toBeVisible();
    
    // Check that an image is displayed in the main area
    const mainImage = page.locator('.aspect-w-16.aspect-h-12 img').first();
    await expect(mainImage).toBeVisible();
    
    // Check that the image has proper alt text
    await expect(mainImage).toHaveAttribute('alt', /.*Lanyard.*/);
  });

  test('should display thumbnail gallery', async ({ page }) => {
    // Wait for images to load
    await page.waitForLoadState('networkidle');
    
    // Check that thumbnail container exists
    const thumbnailContainer = page.locator('.grid.grid-cols-2.md\\:grid-cols-5.gap-4');
    await expect(thumbnailContainer).toBeVisible();
    
    // Check that multiple thumbnails are present
    const thumbnails = page.locator('.aspect-w-4.aspect-h-3 img');
    await expect(thumbnails).toHaveCount(5); // Based on the galleryImages array
    
    // Check that thumbnails have cursor-pointer class
    const thumbnailButtons = page.locator('.cursor-pointer');
    await expect(thumbnailButtons.first()).toBeVisible();
  });

  test('should allow thumbnail clicking to change main image', async ({ page }) => {
    // Wait for images to load
    await page.waitForLoadState('networkidle');
    
    // Get the initial main image src
    const mainImage = page.locator('.aspect-w-16.aspect-h-12 img').first();
    const initialSrc = await mainImage.getAttribute('src');
    
    // Click on the second thumbnail (index 1) using a more specific selector
    const thumbnailContainer = page.locator('.grid.grid-cols-2.md\\:grid-cols-5.gap-4');
    const secondThumbnail = thumbnailContainer.locator('.cursor-pointer').nth(1);
    await expect(secondThumbnail).toBeVisible();
    
    // Force click to avoid interception issues
    await secondThumbnail.click({ force: true });
    
    // Wait for the image to change
    await page.waitForTimeout(1000);
    
    // Check that the main image src has changed
    const newSrc = await mainImage.getAttribute('src');
    expect(newSrc).not.toBe(initialSrc);
  });

  test('should display product types section', async ({ page }) => {
    // Check that the Lanyard Types section is visible
    await expect(page.locator('text=Lanyard Types')).toBeVisible();
    
    // Check for specific lanyard type headings
    await expect(page.locator('text=Knitted Plain Lanyard')).toBeVisible();
    await expect(page.locator('text=Satin Polyester Plain')).toBeVisible();
    await expect(page.locator('text=Digital Printed')).toBeVisible();
    await expect(page.locator('text=Recycled Polyester')).toBeVisible();
    
    // Check that VIEW DETAILS buttons are present
    const viewDetailsButtons = page.locator('text=VIEW DETAILS');
    await expect(viewDetailsButtons).toHaveCount(4);
  });

  test('should display quality features section', async ({ page }) => {
    // Check that quality features are visible
    await expect(page.locator('text=Quality Features')).toBeVisible();
    
    // Check for specific quality features
    await expect(page.locator('text=Premium Materials')).toBeVisible();
    await expect(page.locator('text=Custom Printing')).toBeVisible();
  });

  test('should display lanyard upgrades section', async ({ page }) => {
    // Check that upgrades section is visible
    await expect(page.locator('text=Lanyard Upgrades')).toBeVisible();
    
    // Check for specific upgrade options
    await expect(page.locator('text=Safety Breakaway')).toBeVisible();
    await expect(page.locator('text=Transition Buckle')).toBeVisible();
    await expect(page.locator('text=Custom Hardware')).toBeVisible();
  });

  test('should display accessories showcase section', async ({ page }) => {
    // Check that accessories section is visible
    await expect(page.locator('text="+100 Variations Available"')).toBeVisible();
    
    // Check for accessory categories
    await expect(page.locator('text=Badge Holders')).toBeVisible();
    await expect(page.locator('text=Retractable Reels')).toBeVisible();
    await expect(page.locator('text=Keychains')).toBeVisible();
  });

  test('should display quote form sections', async ({ page }) => {
    // Check that quote sections are visible
    await expect(page.locator('text=Get Your Lanyard Quote')).toBeVisible();
    
    // Check for form options
    await expect(page.locator('text=Simple Quote Form')).toBeVisible();
    await expect(page.locator('text=Detailed Quote Request')).toBeVisible();
    
    // Check for CTA buttons
    await expect(page.locator('text=GET LANYARD QUOTE')).toBeVisible();
    await expect(page.locator('text=WHATSAPP QUOTE')).toBeVisible();
  });

  test('should have working WhatsApp integration', async ({ page }) => {
    // Check that WhatsApp link is present and has correct href
    const whatsappLink = page.locator('a[href*="wa.me"]');
    await expect(whatsappLink).toBeVisible();
    await expect(whatsappLink).toHaveAttribute('href', /.*wa\.me\/905455812613.*/);
  });

  test('should display footer correctly', async ({ page }) => {
    // Scroll to footer
    await page.locator('footer').scrollIntoViewIfNeeded();
    
    // Check that footer is visible
    await expect(page.locator('footer')).toBeVisible();
    
    // Check for key footer elements
    await expect(page.locator('text=3-day delivery to EU & US')).toBeVisible();
    await expect(page.locator('text=Factory-direct pricing')).toBeVisible();
    await expect(page.locator('text=Quick Links')).toBeVisible();
    await expect(page.locator('text=Contact')).toBeVisible();
  });

  test('should have responsive design elements', async ({ page }) => {
    // Test mobile responsiveness by checking grid classes
    const galleryGrid = page.locator('.grid.grid-cols-1.lg\\:grid-cols-3');
    await expect(galleryGrid).toBeVisible();
    
    // Check that thumbnail grid is responsive
    const thumbnailGrid = page.locator('.grid.grid-cols-2.md\\:grid-cols-5');
    await expect(thumbnailGrid).toBeVisible();
  });

  test('should handle keyboard navigation for thumbnails', async ({ page }) => {
    // Wait for images to load
    await page.waitForLoadState('networkidle');
    
    // Focus on the first thumbnail
    const firstThumbnail = page.locator('.cursor-pointer').first();
    await firstThumbnail.focus();
    
    // Press Enter key to select thumbnail
    await page.keyboard.press('Enter');
    
    // Check that the thumbnail becomes selected
    await expect(firstThumbnail).toHaveClass(/ring-2.*ring-teal-500/);
  });

  test('should load all gallery images successfully', async ({ page }) => {
    // Wait for all network requests to complete
    await page.waitForLoadState('networkidle');
    
    // Check that all images in the gallery are loaded
    const allImages = page.locator('img[src*="/productimages/"]');
    const imageCount = await allImages.count();
    
    // Should have at least 5 gallery images plus potentially more in other sections
    expect(imageCount).toBeGreaterThanOrEqual(5);
    
    // Check that images have proper src attributes
    for (let i = 0; i < Math.min(5, imageCount); i++) {
      const img = allImages.nth(i);
      await expect(img).toHaveAttribute('src', /\/productimages\/.*/);
    }
  });
});