import { APIRequestContext, request } from '@playwright/test';
import { getEnvConfig } from './env.config';

export class ApiClient {

  private apiContext!: APIRequestContext;

  async init() {
    const { apiBaseURL } = getEnvConfig();

    this.apiContext = await request.newContext({
      baseURL: apiBaseURL,
      extraHTTPHeaders: {
        'x-api-key': 'reqres_973319b379034bca95d23d03549eddb9'
      }
    });
  }

  async get(endpoint: string) {
    return this.apiContext.get(endpoint);
  }

  async dispose() {
    await this.apiContext.dispose();
  }
}