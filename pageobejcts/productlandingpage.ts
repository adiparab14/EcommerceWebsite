import { BasePage } from './basepage'
import { env } from '../env'

export class ProductLandingPage extends BasePage {
    constructor(page) {
        super(page);
    }

    async selectRandomProductOnPage() {
        const random = Math.floor(Math.random() * 10) + 1
        await this.page.click(`//div[@data-testid='product-card'][${random}]/a`)
    }

}