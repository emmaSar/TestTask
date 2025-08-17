// Environment configuration
export const ENV = {
  // App Configuration
  APP_NAME: 'TestTask',
  APP_VERSION: '0.0.1',
  APP_ENV: __DEV__ ? 'development' : 'production',

  // API Configuration
  API_BASE_URL: __DEV__
    ? 'https://dev-api.example.com'
    : 'https://api.example.com',
  API_TIMEOUT: 30000,
  API_VERSION: 'v1',

  // Feature Flags
  ENABLE_ANALYTICS: !__DEV__,
  ENABLE_CRASH_REPORTING: !__DEV__,
  ENABLE_PUSH_NOTIFICATIONS: true,
  ENABLE_DARK_MODE: false,
  ENABLE_BIOMETRIC_AUTH: false,

  // Development Settings
  ENABLE_LOGGING: __DEV__,
  ENABLE_DEBUG_MENU: __DEV__,
  ENABLE_PERFORMANCE_MONITORING: __DEV__,

  // Build Configuration
  ANDROID_APP_ID: 'com.test.testtask',
  IOS_BUNDLE_ID: 'com.test.testtask',

  // Cache Configuration
  CACHE_TTL: __DEV__ ? 60000 : 300000, // 1 min dev, 5 min prod
  MAX_CACHE_SIZE: __DEV__ ? 25 : 50,
} as const;

// Environment validation
export const validateEnvironment = (): void => {
  const requiredVars = ['APP_NAME', 'APP_VERSION', 'API_BASE_URL'];

  for (const varName of requiredVars) {
    if (!ENV[varName as keyof typeof ENV]) {
      throw new Error(`Missing required environment variable: ${varName}`);
    }
  }
};

// Development helpers
export const isDevelopment = (): boolean => ENV.APP_ENV === 'development';
export const isProduction = (): boolean => ENV.APP_ENV === 'production';

// API helpers
export const getApiUrl = (endpoint: string): string => {
  return `${ENV.API_BASE_URL}/${ENV.API_VERSION}/${endpoint}`;
};

export const getApiHeaders = (): Record<string, string> => {
  return {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'User-Agent': `${ENV.APP_NAME}/${ENV.APP_VERSION}`,
  };
};
