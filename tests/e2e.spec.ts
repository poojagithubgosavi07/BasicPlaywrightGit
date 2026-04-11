import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { captureScreenshot } from '../utils/screenshotUtil';

test('Complete E2E flow', async ({ page }) => {

    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    try {
        await login.navigate();
        await login.login('standard_user', 'secret_sauce');

        await inventory.addProductToCart();
        await inventory.goToCart();

        await cart.verifyItemAdded();
        await cart.clickCheckout();

        await checkout.fillDetails();
        await checkout.finishOrder();

        await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');

    } catch (error) {
        await captureScreenshot(page, 'failure');
        throw error;
    }
});