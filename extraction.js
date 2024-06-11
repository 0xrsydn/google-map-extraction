const { chromium } = require('playwright');

(async () => {
  try {
    // Launch browser
    const browser = await chromium.launch({ headless: false });

    // Create a new page
    const page = await browser.newPage();

    await page.goto('https://www.google.com/maps/');
    await page.fill('#searchboxinput', 'Bali Diamond Estates  Villas');
    await page.click('#searchbox-searchbutton');
    // Wait for the link to be available and get the href attribute
    await page.waitForSelector('a.hfpxzc');
    const mapUrl = await page.getAttribute('a.hfpxzc', 'href');
    console.log('Google Maps URL:', mapUrl);
    await page.click('a.hfpxzc');
    
    // Wait for the website link to be available and get the href attribute
    await page.waitForSelector('a[data-item-id="authority"]');
    const websiteUrl = await page.getAttribute('a[data-item-id="authority"]', 'href');
    console.log('Website URL:', websiteUrl);

    // Close the browser
    await browser.close();
  } catch (error) {
    console.error('An error occurred:', error);
  }
})();