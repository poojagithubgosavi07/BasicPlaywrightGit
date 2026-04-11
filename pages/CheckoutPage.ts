import { Page } from '@playwright/test';

export class CheckoutPage {
    constructor(private page: Page) {}

    async fillDetails() {
        await this.page.fill('#first-name', 'Pooja');
        await this.page.fill('#last-name', 'Test');
        await this.page.fill('#postal-code', '400001');
        await this.page.click('#continue');
    }

    async finishOrder() {
        await this.page.click('#finish');
    }
}