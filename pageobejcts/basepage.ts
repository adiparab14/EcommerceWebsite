import { Page } from '@playwright/test'
import { env } from '../env'

export class BasePage {
    page: Page;
    constructor(page) {
        this.page = page;
    }

    async navigate(path) {
        await this.page.goto(`${env.url}${path}`);
    }
}