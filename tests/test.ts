import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageobejcts/loginpage';
import { ProductLandingPage } from '../pageobejcts/productlandingpage';
import { HomePage } from '../pageobejcts/homepage';
import { ProductDetailPage } from '../pageobejcts/productdetailpage';
import { Checkout } from '../pageobejcts/checkout';
import { env } from '../env'
import { Data } from '../data/data';


test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const checkout = new Checkout(page);
  await loginPage.navigate();
  await loginPage.login(env.username, env.password);
  await homePage.acceptCookies();
  await homePage.openShoppingCart();
  await checkout.emptyShoppingCart();
})

test('basic test', async ({ page }) => {
  const homePage = new HomePage(page);
  const plp = new ProductLandingPage(page);
  const pdp = new ProductDetailPage(page);
  const checkout = new Checkout(page);
  let productName, productPrice;
  await homePage.searchProuctAndSelectSuggestion(Data.searchBrand);
  await plp.selectRandomProductOnPage();
  await pdp.selectAvailableSize();
  [productName, productPrice] = await pdp.getProductNameAndPrice();
  await pdp.addToCart();
  await homePage.openShoppingCart();
  await checkout.continueToCheckout();
  await checkout.enterAddressDetailsAndContinuetoPay();
  expect(await checkout.getProductAndBrandNamePaymentsPage()).toContain(productName);
  expect(await checkout.getProductAndBrandNamePaymentsPage()).toContain(Data.searchBrand);
  expect(await checkout.getProductPricePaymentPage()).toEqual(productPrice);
  expect(await checkout.isPlaceOrderButtonEnabled()).toBeTruthy();
});
