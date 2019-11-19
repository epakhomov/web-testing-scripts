const puppeteer = require('puppeteer');
  
(async () => {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  await page.goto('http://104.43.143.73:5000/Identity/Account/Login');
  await page.type('#Input_Email', 'eugene.pakhomov@contrastsecurity.com')
  await page.type('#Input_Password', '!Password123')
  await page.click('button.btn.btn-primary')
  //await page.screenshot({path: 'example2.png'});

  await browser.close();
})();
