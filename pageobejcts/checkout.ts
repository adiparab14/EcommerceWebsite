import { BasePage } from "./basepage"
import { Data } from '../data/data'

export class Checkout extends BasePage {
    constructor(page) {
        super(page);
    }

    async emptyShoppingCart() {
        await this.page.waitForLoadState();
        const removeAllUnavailableItems = `//button[@data-testid="cart-remove-all-unavailable-items-button"]`;
        try {
            await this.page.waitForSelector(removeAllUnavailableItems, { timeout: 5000 });
            await this.page.click(removeAllUnavailableItems);
        }

        catch (e) { }

        if (await this.page.locator(`(//div[@data-testid="cart-item"])[1]`).isVisible()) {
            const count = await this.page.locator(`//div[@data-testid="cart-item"]`).count();
            let i;
            for (i = 1; i <= count; i++) {
                await this.page.click(`(//div[@data-testid="cart-item"])[1]//button[@data-testid="cart-item-delete-button"]`);

            }
        }
    }




    async continueToCheckout() {
        await this.page.click(`//a[@data-testid='cart-continue-to-checkout-top-a']`);

    }

    async enterAddressDetailsAndContinuetoPay() {
        await this.page.fill(`//input[@name='shipping_first_name']`, Data.shippingFirstName);
        await this.page.fill(`//input[@name='shipping_last_name']`, Data.shippingLastName);
        await this.page.fill(`//input[@name='shipping_email']`, Data.shippingEmailAddress);
        await this.page.fill(`//input[@name='shipping_email_repeat']`, Data.shippingEmailAddress);
        await this.page.fill(`//input[@name='shipping_phone']`, Data.shippingPhoneNo);
        await this.page.selectOption(`//select[@name='shipping_country']`, Data.shippingCountry)
        if (await this.page.locator(`//input[@name='shipping_city']`).isVisible()) {
            await this.page.fill(`//input[@name='shipping_city']`, Data.shippingCity);
        }
        await this.page.fill(`//input[@name='shipping_postcode']`, Data.shippingPostalCode);
        if (await this.page.locator(`//input[@name='shipping_street_name']`).isVisible()) {
            await this.page.fill(`//input[@name='shipping_street_name']`, Data.shippingStreet);
        }
        await this.page.fill(`//input[@name='shipping_house_number']`, Data.shippingHouseNo);
        // await this.page.check(`//input[@id='delivery-postnl']`);
        // await this.page.waitForLoadState('load');
        await this.page.click(`//div[@class='checkout-steps']//button[contains(@class,'continue-checkout')]`)
    }

    async getProductAndBrandNamePaymentsPage() {
        return (await this.page.locator(`//td[@class="product-name"]`).textContent()).trim();
    }

    async getProductPricePaymentPage() {
        return (await this.page.locator(`//td[@class="product-total"]//span[contains(@class,'amount')]`).textContent()).trim();
    }

    async getBrandNamePaymentsPage() {
        return ((await this.page.locator(`//td[@class="product-name"]/span`).textContent()).toLowerCase()).trim();
    }

    async isPlaceOrderButtonEnabled() {
        return await this.page.locator(`//div[@class='cart_totals cart-total-table']//button[@id='place_order']`).isEnabled();
    }
}
