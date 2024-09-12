import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';

test.describe('AutoWait', () => {
    test.beforeEach('AutoWaiting Check', async ({ page }) => {
        await page.goto('http://www.uitestingplayground.com/ajax')
        await page.locator('#ajaxButton').click()

    const sucessBtn =page.locator('.bg-success')

   // const text = await sucessBtn.textContent()
    //expect(text).toContain('Data loaded with AJAX get request.')

    await expect(sucessBtn).toHaveText('Data loaded with AJAX get request.',{timeout:20000})

        
    })
    test('Wait_alternative way', async ({ page }) => {

        const sucessBtn =page.locator('.bg-success')

        //wait for element
       await page.waitForSelector('.bg-success')

        //wait for pqarticular response
      //  await page.waitForResponse('http://www.uitestingplayground.com/ajax')

    const text = await sucessBtn.allTextContents()
    expect(text).toContain('Data loaded with AJAX get request.')
        
    })
    
    
})

