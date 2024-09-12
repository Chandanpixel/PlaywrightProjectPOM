import { test, expect } from '@playwright/test';

test.describe('Temp', () => {
    test('TempShowing', async ({ page }) => {

        await page.goto('https://www.google.com/')
      //  await page.locator('.header').screenshot({path:"google.png"})

     await page.locator('#APjFqb').fill('local temperature')

     await page.locator('(//input[@name="btnK"])[1]').click()

     await page.screenshot({path:"screenshots/screenshot2.png", fullPage:true})


    
    

        
    })
    
    
})

