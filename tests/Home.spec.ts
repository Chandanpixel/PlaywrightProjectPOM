import { test, expect } from '@playwright/test';

test.describe('HomePage', () => {
    test('Open Home Page and verify title', async ({ page }) => {

       await page.goto('https://practice.sdetunicorns.com/')

       await expect(page).toHaveTitle("Practice E-Commerce Site – SDET Unicorns")
        
    })
    
})

test.describe.only('HomePage 2', () => {
    test('Open Home Page and verify title', async ({ page }) => {

       await page.goto('https://testmatick.com/best-demo-websites-to-perform-software-test-automation/')
       await page.screenshot({ path: 'screenshots/screenshot1.png', fullPage: true });
       const title = await page.title()
       console.log(title)

       await expect(page).toHaveTitle("Best Demo Websites to Perform Software Test Automation – TestMatick")
        
    })
    
})
