import { Page, expect } from '@playwright/test';

export class CartPage {
    constructor(private page: Page) {}

    async verifyItemAdded() {
        await expect(this.page.locator('.inventory_item_name')).toBeVisible();
    }

    async clickCheckout() {
        await this.page.click('#checkout');
    }
}