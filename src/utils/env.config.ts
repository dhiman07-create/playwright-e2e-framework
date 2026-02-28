type Environment = 'dev' | 'staging' | 'prod';

interface EnvConfig {
  uiBaseURL: string;
  apiBaseURL: string;
}

const environments: Record<Environment, EnvConfig> = {
  dev: {
    uiBaseURL: 'https://www.saucedemo.com',
    apiBaseURL: 'https://reqres.in',
  },
  staging: {
    uiBaseURL: 'https://www.saucedemo.com',
    apiBaseURL: 'https://reqres.in',
  },
  prod: {
    uiBaseURL: 'https://www.saucedemo.com',
    apiBaseURL: 'https://reqres.in',
  },
};

export function getEnvConfig(): EnvConfig {
  const env = (process.env.TEST_ENV as Environment) || 'dev';

  if (!environments[env]) {
    throw new Error(`Invalid TEST_ENV: ${env}`);
  }

  return environments[env];
}