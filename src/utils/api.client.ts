import { APIRequestContext, request } from '@playwright/test';
import { getEnvConfig } from './env.config';

export class ApiClient {

  private apiContext!: APIRequestContext;

  async init() {
    const { apiBaseURL } = getEnvConfig();

    this.apiContext = await request.newContext({
      baseURL: apiBaseURL,
      extraHTTPHeaders: {
        'x-api-key': 'reqres_d97bcf1f8e5d4e868dc9575f256da2e9'
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