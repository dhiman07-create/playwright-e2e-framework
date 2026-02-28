import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { allure } from 'allure-playwright';

test.describe('Login Feature', () => {

  test('User can login successfully', async ({ page }) => {
    allure.severity('critical');
    allure.feature('Login');
    allure.story('Valid User Login');
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.navigate('/');
    await loginPage.login('standard_user', 'secret_sauce');

    await inventoryPage.validateInventoryLoaded();
  });

});