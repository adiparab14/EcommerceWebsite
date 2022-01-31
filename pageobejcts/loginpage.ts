import { BasePage } from './basepage'
import { env } from '../env'

export class LoginPage extends BasePage {
    constructor(page) {
        super(page);
    }

    txtEmail = `//input[@name='email']`;
    txtPassword = `//input[@name='password']`;
    btnLogin = `//button[@data-testid='login-form-login-button']`;

    async navigate() {
        await this.page.goto(`${env.url}/sign-in`, { waitUntil: 'networkidle' });
    }

    async login(username, password) {
        await this.page.fill(this.txtEmail, username);
        await this.page.fill(this.txtPassword, password);
        await this.page.click(this.btnLogin);
        await this.page.waitForNavigation({ waitUntil: 'networkidle' });
    }

}