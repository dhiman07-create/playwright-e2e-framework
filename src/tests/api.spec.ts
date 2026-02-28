import { test, expect } from '@playwright/test';
import { ApiClient } from '../utils/api.client';

test.describe('API Tests - ReqRes', () => {

  test('Validate GET users API', async () => {

    const apiClient = new ApiClient();
    await apiClient.init();

    const response = await apiClient.get('/api/users?page=2');

    expect(response).toBeOK();

    const body = await response.json();
    expect(body.page).toBe(2);

    await apiClient.dispose();
  });

});