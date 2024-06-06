const { By, Key, Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

async function test_case() {

    //Set Chrome option
    let options = new chrome.Options();
    options.addArguments('headless');
    options.addArguments('disable-gpu');
    options.setChromeBinaryPath('/usr/bin/google-chrome');

    // Create a Driver
    let driver = await new Builder().forBrowser("chrome").setChromeOptions(options).build();

    try {
        
        await driver.get("https://testingenv-mishellgarcia.web.app");

        
        await driver.findElement(By.id('deleteMemberBtn')).click();

        
        let alert = await driver.switchTo().alert();

        
        let alertText = await alert.getText();

        
        const contieneError = /ERROR/.test(alertText);
        if (contieneError){
            console.log('Test Failed');
        }else{
            console.log('Test Success');
        }

        await alert.accept();

    } catch (error) {
        console.log('An error occurred:', error);
    } finally {
        await driver.quit();
    }

}
test_case();
