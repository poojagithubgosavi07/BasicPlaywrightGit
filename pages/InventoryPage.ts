import { Page } from '@playwright/test';

export class InventoryPage {
    constructor(private page: Page) {}

    async addProductToCart() {
        await this.page.click('text=Sauce Labs Onesie');
        await this.page.click('button:has-text("Add to cart")');
    }
    
    async goToCart() {
        await this.page.click('.shopping_cart_link');
    }

    async waitForSomeTime() {
    await this.page.waitForTimeout(2000);
}

}