import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByRole('textbox',{name:'Username'}).fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole('button',{name:'Login'}).click()


    
})

test.describe('Ui Component', () => {
    test('input fields', async ({ page }) => {

        await page.getByText('Admin').click()

       const user= await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')

     //  await user.fill('Admin')
      //  await user.clear();     ---Doubt
      await user.pressSequentially('Admin123',{delay:500})

        //Generic assertion  ---Doubt
      //  const inputValue = await user.inputValue()
        // expect(inputValue).toEqual('Admin123')

        await page.getByText('My Info').click()

        await page.locator('//label[normalize-space()="Female"]').click()


       // await page.getByLabel('Female').check({force:true})

     //  await page.getByRole('radio',{name:"Female"}).check({force:true})

   


    })

    test('chechbox', async ({ page }) => {

        await page.getByText('Recruitment').click()
       // await page.locator('(//i[@class="oxd-icon bi-check oxd-checkbox-input-icon"])[1]').click()
       await page.locator('(//div[contains(text(),"Associate IT Manager")])[1]').screenshot({path:'screenshots/screenshots3.png'})
        await page.locator('(//div[contains(text(),"Associate IT Manager")])[1]').click()
     //  await page.getByRole('checkbox',{name:'Associate IT Manager'}).check()

     

        
    })
    
    
    
})
