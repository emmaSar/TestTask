// Export all configuration modules
export * from './Colors';
export * from './constants';
export * from './utils';
export * from './theme';
export * from './environment';

// Re-export commonly used utilities for convenience
export {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  isIOS,
  isAndroid,
  wp,
  hp,
  getSafeAreaTop,
  getSafeAreaBottom,
} from './utils';

// Re-export commonly used constants
export {
  LAYOUT,
  FONT_SIZE,
  LINE_HEIGHT,
  Z_INDEX,
  ANIMATION,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
} from './constants';

// Re-export theme and common styles
export { theme, useTheme, commonStyles, responsive } from './theme';

// Re-export environment helpers
export {
  ENV,
  validateEnvironment,
  isDevelopment,
  isProduction,
  getApiUrl,
  getApiHeaders,
} from './environment';
