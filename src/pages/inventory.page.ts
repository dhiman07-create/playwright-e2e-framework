import { Page, expect } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async validateInventoryLoaded() {
    await expect(this.page.locator('.inventory_list')).toBeVisible();
  }
}