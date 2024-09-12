import { test, expect } from '@playwright/test';

test.describe('Test Locators Syntax', () => {
    test('Locators', async ({ page }) => {

     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //By tagName
     //  await page.locator('input').click()

        //By idName
      // await  page.locator('#oxd-toaster_1').click()

      //By attribute

     // await page.locator('placeholder["Email"]')


        //By X path

  // await page.locator('(//input[@placeholder="Username"])[1]').fill('Admin')
    await page.getByRole('textbox',{name:'Username'}).fill('Admin')


  // await page.locator('//input[@placeholder="Password"]').fill('admin123')
 // await page.getByRole('textbox',{name:'Password'}).fill('admin123')
  await page.getByPlaceholder('Password').fill('admin123')

  await page.getByRole('button',{name:'Login'}).click()

  await page.getByText('Admin').click()

  await page.getByText('System Users').click()
 //const result=  await page.locator('//h6[normalize-space()="User Management"]').allTextContents()

 //await expect(result).toEqual('')

await page.locator('//a[@class="oxd-main-menu-item active"]').click()
        
    })
    
})

