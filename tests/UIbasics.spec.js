import { test, expect } from '@playwright/test';


test('First Playwright test',async ({page})=> 
{
    // no order of steps 
    // need to use await 
    // async and await comes as combination 
    // 
   const username = page.locator('#username');
   //const page =  await context.newPage();
   const signIn = page.locator("[type='submit']");
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   console.log(await page.title());
   //css 
   await username.fill("rahulshetty");
   await page.locator("[type='Password']").fill("learning");
   await signIn.click();
   console.log(await page.locator("[style*='block']").textContent('Incorrect'));
   await username.fill('');
   await username.fill("rahulshettyacademy");
   await page.locator("[type='Password']").fill("Learning@830$3mK2");
   await signIn.click();
   await expect(page).toHaveTitle("ProtoCommerce");
   console.log(await page.title());

});
// only is for specific group of test 
test('Page playwright tittle' , async ({page})=>
{
    await page.goto("https://google.com");
    //get tittle - 
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
    //css 
});

test ('Page Playwright test',async ({browser,page}) =>
{
// chrome - plugins , cookies and inforamtion 
//const context =  await browser.newContext();
//page for you to automate 
//const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

});

// page in test parameter achivies same thing 
test('Browser context test', async ({ browser }) => {
   const context = await browser.newContext();
   const page = await context.newPage();
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
 });

test ('Browser context declaration ',async ({browser}) =>
{

// chrome - plugins , cookies and inforamtion 
const context =  await browser.newContext();
//page for you to automate 
const page = await context.newPage();
const username = page.locator('#username');
const password = page.locator("[type='Password']");
const signIn = page.locator('input[type="submit"]'); 
const cardTittles = page.locator('.card-body a');
const allTittles = await cardTittles.allTextContents();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
await username.fill("rahulshetty");
await page.locator("[type='Password']").fill("learning");
await signIn.click();
//console.log(await page.locator("[style*='block']").textContent('Incorrect'));
//await page.locator('#login-form > div:first-child > strong').textContent('Incorrect');
await expect(page.locator("[style*='block']")).toContainText('Incorrect');
//const error = page.locator("[style*='block']");
//await error.waitFor({ state: 'visible' });   // waits until it appears
//const message = await error.textContent();
//console.log(message);
await username.fill('');
await username.fill("rahulshettyacademy");
await page.locator("[type='Password']").fill("Learning@830$3mK2");
await signIn.click();
// type - fill fill clears out previous text
console.log(await cardTittles.first().textContent());
console.log(await cardTittles.nth(0).textContent());
console.log(await cardTittles.allTextContents());

});

test('@Child windows hadl', async ({browser})=>
 {
    const context = await browser.newContext();
    const page =  await context.newPage();
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
    const [newPage]=await Promise.all(
   [
      context.waitForEvent('page'),//listen for any new page pending,rejected,fulfilled
      documentLink.click(),
   
   ])//new page is opened
    const  text = await newPage.locator(".red").textContent();
    const arrayText = text.split("@")
    const domain =  arrayText[1].split(" ")[0]
    //console.log(domain);
    await page.locator("#username").fill(domain);
    console.log(await page.locator("#username").inputValue());

 })

 test('Login page UI Controls',async ({page})=>
 {

   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   const userName = page.locator('#username');
   const signIn = page.locator('#signInBtn');
   const dropdown = page.locator('select.form-control');
   await dropdown.selectOption("Consultant");
   const radiobutton = page.locator('input[id=usertype][value=admin]');
   radiobutton.check();
   const termButton = page.locator('#terms');
   await termButton.check();
   await expect(radiobutton).toBeChecked();
   await expect(termButton).toBeChecked();
   await termButton.uncheck();
   expect(await termButton.isChecked()).toBeFalsy();
   await termButton.check();
   expect(await termButton.isChecked()).toBeTruthy();
   await username.fill("rahulshettyacademy");
   await page.locator("[type='Password']").fill("Learning@830$3mK2");
   console.log("Page tittle"+ await page.title());
   // // Testing automatic Jenkins build trigger

 })


 