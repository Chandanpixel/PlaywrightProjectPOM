import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    
})
test.describe('PracticePage', () => {
    test('RadioButton', async ({ page }) => {

      // comment multiple line--
      /*  const radioButton= page.locator('(//legend[normalize-space()="Radio Button Example"])[1]')
        await page.getByLabel('Radio1').check({force:true})
        await radioButton.getByRole('radio',{name:"Radio1"}).check({force:true})
        */
       await page.locator('(//input[@value="radio1"])[1]').check()
   
    })
    
    test('Checkbox', async ({ page }) => {
    //   await page.getByText('Checkbox Example').click()
    //  await page.getByRole('checkbox',{name:"Option1"}).click()

      await page.locator('#checkBoxOption1').click()

      await page.locator('#checkBoxOption2').check()
      await page.locator('#checkBoxOption1').uncheck()
      
 console.log(await page.locator('#checkBoxOption2').isChecked())

      
    })

    //DropDown 

    test('DropDown', async ({ page }) => {
      const dropdown = await page.locator('#dropdown-class-example')

   await dropdown.selectOption("option2")
//   await page.pause()
      
    })
    
    // MouseHoverAction
    test('MouseHover', async ({ page }) => {
      const MouseHover = await page.locator('#mousehover')
      await  MouseHover.click()
   const text=   await page.locator('.mouse-hover-content a').allTextContents()
   console.log(text)
  
     await expect(MouseHover).toContainText('Mouse Hover')
    })
    
    test('datePicker', async ({ page }) => {

      await page.goto('https://demo.automationtesting.in/Datepicker.html')
      await page.locator('#datepicker1').click
     // await page.locator('//a[normalize-space()="25"])[1]').click()

  
      })
    
})

