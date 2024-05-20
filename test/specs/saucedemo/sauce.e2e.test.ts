//🦁 Created by Mónica Monge May 2024

import LoginSouce from '../../pageobjects/saucedemo/loginSauce.page.js';
import Inventory from '../../pageobjects/saucedemo/inventory.page.js';
import Cart from '../../pageobjects/saucedemo/cart.page.js';
import CheckoutStepOne from '../../pageobjects/saucedemo/checkoutStepOne.page.js';
import CheckoutStepTwo from '../../pageobjects/saucedemo/checkoutStepTwo.page.js';
import CheckoutComplete from '../../pageobjects/saucedemo/checkoutComplete.page.js';
import AllureReporter from '@wdio/allure-reporter';
import wrapper from '../../utils/wrapper.js';


describe('Souce application E2E validation', () => {

  it('Should validate that the application allows you to make a complete purchase.', async () => {

    AllureReporter.addSeverity('Critical');
    AllureReporter.addArgument('platform', 'Windows');

    AllureReporter.addFeature('======= Validate Login page ======');
    AllureReporter.addStep('Open the browser URL');
    await LoginSouce.open();

    AllureReporter.addStep('Enter the user name and password, then press Login');
    await LoginSouce.login(LoginSouce.userNameText, LoginSouce.passwordText);
      
    AllureReporter.addFeature('======= Validate Inventory page ======');
    AllureReporter.addStep('Validate title of the page');
    AllureReporter.addStep(`Expected: '${Inventory.titlePageText}'`);
    await expect(Inventory.titlePageSelector).toHaveText(expect.stringContaining(Inventory.titlePageText));

    AllureReporter.addStep('Validate Inventory URL');
    AllureReporter.addStep(`Expected: '${Inventory.inventoryURL}'`);
    await expect(await browser.getUrl()).toEqual(expect.stringContaining(Inventory.inventoryURL));
  
    AllureReporter.addStep(`Expected: The name of the first article is ${Inventory.sauceLabsArticleText}`);
    await expect(Inventory.txtSauceLabsBackpackSelector).toHaveText(expect.stringContaining(Inventory.sauceLabsArticleText));

    AllureReporter.addStep(`Click on the button 'Add to cart' of the article '${Inventory.sauceLabsArticleText}'`);
    await wrapper.clickElement(Inventory.btnSauceLabsBackpackSelector);
       
    AllureReporter.addStep(`Expected: The text of the button should change to'${Inventory.removeButtomText}'`);
    await expect(await Inventory.btnSauceLabsBackpackSelector).toHaveText(expect.stringContaining(Inventory.removeButtomText));

    AllureReporter.addStep(`Scroll to article '${Inventory.testAllArticleText}'`);
    await wrapper.scrollToElement(Inventory.btntestAllTheThingsSelector);

    await browser.pause(1000);
    
    AllureReporter.addStep(`Click on the button 'Add to cart' of the article '${Inventory.testAllArticleText}'`);
    await wrapper.clickElement(Inventory.btntestAllTheThingsSelector);

    AllureReporter.addStep(`Scroll to shopping cart button`);
    await wrapper.scrollToElement(Inventory.btnShoppingCartSelector);
    
    AllureReporter.addStep(`Click on shopping cart button`);
    await wrapper.clickElement(Inventory.btnShoppingCartSelector);
    
    await browser.pause(1000);

    AllureReporter.addFeature('======= Validate Cart page ======');
    AllureReporter.addStep('Validate title of the page');
    AllureReporter.addStep(`Expected: '${Cart.titleCartPageText}'`);
    await expect(Cart.titlePageSelector).toHaveText(expect.stringContaining(Cart.titleCartPageText));

    AllureReporter.addStep('Validate Cart URL');
    AllureReporter.addStep(`Expected: '${Cart.cartURL}'`);
    await expect(await browser.getUrl()).toEqual(expect.stringContaining(Cart.cartURL));

    AllureReporter.addStep(`Click on Checkout button`);
    await wrapper.clickElement(Cart.btnCheckoutSelector);
  
    await browser.pause(1000);

    AllureReporter.addFeature('======= Validate Checkout Step One page ======');
    AllureReporter.addStep('Enter the first name, last name and zip code, then press Continue');
    await CheckoutStepOne.fillOutForm(CheckoutStepOne.firstNameText, CheckoutStepOne.lastNameText,
      CheckoutStepOne.zipCodeText);

    await browser.pause(1000);
    
    AllureReporter.addStep(`Click on Continue button`);
    await wrapper.clickElement(CheckoutStepOne.btnContinueSelector);

    await browser.pause(1000);

    AllureReporter.addFeature('======= Validate Checkout Step Two page ======');
    AllureReporter.addStep('Validate amount article match with shopping cart amount');
    AllureReporter.addStep(`Expected: '${CheckoutStepTwo.amountOfArticles}'`);
    await expect(await $$('.cart_item').length).toBe(CheckoutStepTwo.amountOfArticles);    
    
    await browser.pause(2000); 

    AllureReporter.addStep(`Scroll to Finish button`);
    await wrapper.scrollToElement(CheckoutStepTwo.btnFinishSelector);

    AllureReporter.addStep(`Click on Finish button`);
    await wrapper.clickElement(CheckoutStepTwo.btnFinishSelector);

    await browser.pause(1000); 

    AllureReporter.addFeature('======= Validate Complete page ======');
    AllureReporter.addStep('Validate text of Complete order');
    AllureReporter.addStep(`Expected: '${CheckoutComplete.completeOrderMessage}'`);
    await expect(CheckoutComplete.completeOrderMessageSelector).toHaveText(expect.stringContaining(CheckoutComplete.completeOrderMessage));

    AllureReporter.addStep('Validate Complete order URL');
    AllureReporter.addStep(`Expected: '${CheckoutComplete.checkoutCompleteURL}'`);
    await expect(await browser.getUrl()).toEqual(expect.stringContaining(CheckoutComplete.checkoutCompleteURL));
    
    await browser.pause(2000);

  });

  it('Should login fail (negative scenario) validation.', async () => {

    AllureReporter.addFeature('======= Env Login page ======');
    AllureReporter.addSeverity('Critical');
    AllureReporter.addArgument('platform', 'Windows');

    AllureReporter.addFeature('======= Fail Login ======');
    AllureReporter.addStep('Open the browser URL');
    await LoginSouce.open();

    AllureReporter.addStep('Enter invalid user and valid password then press Login');
    await LoginSouce.login(LoginSouce.invalidUserText, LoginSouce.passwordText);
    await expect(Inventory.titlePageSelector).toBeExisting();
    await browser.pause(2000);

  });
 
});
