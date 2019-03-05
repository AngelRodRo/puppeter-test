const puppeteer = require('puppeteer');
const config = require("./config.json");
(async () => {

    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.setViewport({ width: 1400, height: 600 })
    await page.goto('https://facebook.com');

    await page.type("#email", config.email);
    await page.type("#pass", config.password);
    await page.click("#u_0_2");
    await page.waitFor(6000);
    
    await page.click("body");
    await page.waitFor(1000);

    await page.click("#u_0_g > a > div");
    await page.waitFor(1500);

    await page.click(".uiScrollableAreaWrap.scrollable > div > div > ul > li:nth-child(6)");
    await page.waitFor(2000);
    await page.type("body", "este es un mensaje de prueba!");
    await page.keyboard.down("Enter");


    await page.waitFor(2000);

    await page.screenshot({path: 'example.png'});
    
    await browser.close();
})();