import { BasePage } from './basepage'
import { env } from '../env'

export class ProductDetailPage extends BasePage {
    constructor(page) {
        super(page);
    }

    async selectAvailableSize() {
        await this.page.click(`//div[@data-testid='product-order-select-size']`);
        await this.page.click(`//div[@data-testid='product-order-select-size']//div[@class='visible menu transition']/div[1]`)
    }

    async addToCart() {
        await this.page.click(`//button[@data-testid="product-order-button"]`)
    }

    async getProductNameAndPrice() {
        const productName = (await this.page.locator(`//a[@data-testid="product-info-brand-name"]/../div[1]`).textContent()).trim();
        const price = (await this.page.locator(`//div[@data-testid="product-info-price"]/span`).textContent()).trim();

        return [productName, price]
    }
}