import { test, expect } from '@playwright/test';

test.describe('Iframe', () => {
    test('DragAndDrop', async ({ page }) => {
        await page.goto('https://www.globalsqa.com/demo-site/draganddrop/')
        const frame = await page.frameLocator('[rel-title="Photo Manager"] iframe')
        await frame.locator('li',{hasText:'High Tatras 2'}).dragTo(frame.locator('#trash'))

        await page.screenshot({ path: 'screenshots/drag&Drop.png', fullPage: true });


        //more precise control
        await frame.locator('li',{hasText:'High Tatras 4'})
        await page.mouse.down
        await frame.locator('#trash').hover()
        await page.mouse.up

        //asssertion
     //   await expect(frame.locator('#trash li h5')).toHaveText(["High Tatras 2","High Tatras 4"])
    })
    
    
})

