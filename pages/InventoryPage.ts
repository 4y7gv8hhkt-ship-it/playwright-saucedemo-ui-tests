import { Page, expect } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async openBackpackDetail() {
    await this.page.locator('[data-test="item-4-title-link"]').click();
  }

  async expectBackpackDetailPage() {
    await expect(this.page).toHaveURL(/inventory-item/);
    await expect(this.page.getByText('Sauce Labs Backpack')).toBeVisible();
  }
}