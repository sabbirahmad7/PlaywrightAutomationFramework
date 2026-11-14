import { test, expect } from '@playwright/test';

test("Browser4 Context -Validating Error login",async ({page})=>

{
    await page.goto("https://rahulshettyacademy.com/client");
   // await page.locator('[type="firstName"]').fill('anshika@gmail.com');
   // await page.locator('[formcontrolname="lastName"]').fill('Iamking@000');
   await page.locator('[type="email"]').fill('anshika@gmail.com');
   await page.locator('[formcontrolname="userPassword"]').fill('Iamking@000');
   await page.locator('[name="login"]').click();
   //await page.waitForLoadState('networkidle');
   // alltextContents do not have automatic wait 
   await page.locator('.card-body b').first().waitFor();
   const tittles = await page.locator('.card-body b').allTextContents();
   console.log(tittles);

});