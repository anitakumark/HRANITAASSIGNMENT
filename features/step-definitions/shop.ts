import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect, $ } from "@wdio/globals";
import { browser } from "@wdio/globals";

import ShopPage from "../pageobjects/shop.page";
import ProductPage from "../pageobjects/product.page";
import CheckoutPage from "../pageobjects/checkout.page";


Given(/^I access the Magento website (.+)$/, async (path: string) => {
  await browser.url("https://magento.softwaretestingboard.com/");
  await browser.maximizeWindow();
});

When(/^I access the Shop$/, async () => {
  await ShopPage.clickShopNewYoga();
});

When(/^I filter products for category (.+)$/, async (category: string) => {
  await ShopPage.clickCategory();
  await ShopPage.clickElectronic();
});

When(/^I open the Product Page$/, async () => {
    await ProductPage.clickDdSportWatch();

});

When(/^I add multiple quantities of the product to the cart$/, async () => {

    await ProductPage.clickQntBox();
    await ProductPage.clickBtnAddToCart();
    await ProductPage.clickCarticon();
    await ProductPage.clickBtnProceedToChkout();

});

Then(/^I perform a Checkout$/, async () => {
  await CheckoutPage.enterEmail();
  await CheckoutPage.enterFirstName();
  await CheckoutPage.enterLastName();
  await CheckoutPage.enterCompany();
  await CheckoutPage.enterStreetAddress();
  await CheckoutPage.enterCity();
  await CheckoutPage.selectState();
  await CheckoutPage.enterPostalCode();
  await CheckoutPage.selectCountry();
  await CheckoutPage.enterPhoneNumber();
  await CheckoutPage.clickRadioBtn();
  await CheckoutPage.clickNextBtn();
  await CheckoutPage.clickPlaceOrderbtn();
  await expect(CheckoutPage.ThankyouMsg).toHaveText('Thank you for your purchase!')
  
});
