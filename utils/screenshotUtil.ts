import { Page } from '@playwright/test';

export async function captureScreenshot(page: Page, name: string) {
    const date = new Date().toISOString().replace(/[:.]/g, '-');
    await page.screenshot({
        path: `screenshots/${name}-${date}.png`,
        fullPage: true
    });
}