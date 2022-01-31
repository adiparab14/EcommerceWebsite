import { BasePage } from "./basepage"

export class HomePage extends BasePage {
    constructor(page) {
        super(page);
    }

    txtSearchBox = `//input[@data-testid='search-input']`;
    lnkFirstSuggestion = `(//div[@data-testid='search-suggestions']//a)[1]`
    lnkShoppingCart = `//a[@data-testid="main-header-cart-a"]`
    lnkAllBrands = `//a[text()='all brands']`
    lnkA2Z = `//div[@data-testid="search-label-all-brands"]//span[text()='View A to Z']`


    async acceptCookies() {
        await this.page.click(`//button[@data-testid="accept-cookie-close"]`);
    }

    async searchProuctAndSelectSuggestion(searchTxt) {
        //await this.page.click(this.lnkAllBrands);
        await this.page.click(this.lnkAllBrands);
        await this.page.click(this.lnkA2Z);
        await this.page.click(`//a//p[text()='${searchTxt}']`)
    }

    async openShoppingCart() {
        await this.page.click(this.lnkShoppingCart);

    }
}