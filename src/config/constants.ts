// App constants
export const APP_NAME = 'TestTask';
export const APP_VERSION = '0.0.1';

// API constants
export const API_BASE_URL = 'https://api.example.com';
export const API_TIMEOUT = 30000; // 30 seconds

// Storage keys
export const STORAGE_KEYS = {
  USER_TOKEN: 'user_token',
  USER_PROFILE: 'user_profile',
  APP_SETTINGS: 'app_settings',
  CACHE_DATA: 'cache_data',
} as const;

// Navigation constants
export const NAVIGATION_KEYS = {
  MAIN_TABS: 'MainTabs',
  EXPLORE_STACK: 'ExploreStack',
  HOTEL_LIST: 'HotelList',
  HOTEL_DETAILS: 'HotelDetails',
  STADIUMS: 'Stadiums',
  CONTACTS: 'Contacts',
  INFORMATION: 'Information',
} as const;

// Screen names
export const SCREEN_NAMES = {
  EXPLORE: 'Explore',
  STADIUMS: 'Stadiums',
  CONTACTS: 'Contacts',
  INFORMATION: 'Information',
} as const;

// Animation constants
export const ANIMATION = {
  DURATION: {
    FAST: 200,
    NORMAL: 300,
    SLOW: 500,
  },
  EASING: {
    EASE_IN: 'ease-in',
    EASE_OUT: 'ease-out',
    EASE_IN_OUT: 'ease-in-out',
  },
} as const;

// Layout constants
export const LAYOUT = {
  PADDING: {
    XS: 4,
    SM: 8,
    MD: 16,
    LG: 24,
    XL: 32,
  },
  MARGIN: {
    XS: 4,
    SM: 8,
    MD: 16,
    LG: 24,
    XL: 32,
  },
  BORDER_RADIUS: {
    XS: 4,
    SM: 8,
    MD: 12,
    LG: 16,
    XL: 24,
    ROUND: 50,
  },
  SHADOW: {
    SM: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    MD: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 4,
    },
    LG: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 8,
    },
  },
} as const;

// Font sizes
export const FONT_SIZE = {
  XS: 10,
  SM: 12,
  MD: 14,
  LG: 16,
  XL: 18,
  XXL: 20,
  TITLE: 22,
  HEADER: 24,
  LARGE_HEADER: 28,
} as const;

// Line heights
export const LINE_HEIGHT = {
  XS: 14,
  SM: 16,
  MD: 18,
  LG: 20,
  XL: 22,
  XXL: 24,
  TITLE: 26,
  HEADER: 28,
  LARGE_HEADER: 32,
} as const;

// Z-index values
export const Z_INDEX = {
  BASE: 0,
  CARD: 1,
  MODAL: 1000,
  TOOLTIP: 1100,
  OVERLAY: 1200,
  DROPDOWN: 1300,
  STICKY: 1400,
  FIXED: 1500,
  TOOLBAR: 1600,
  HEADER: 1700,
  NAVIGATION: 1800,
  NOTIFICATION: 1900,
} as const;

// Error messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  UNKNOWN_ERROR: 'An unknown error occurred. Please try again.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  AUTH_ERROR: 'Authentication failed. Please log in again.',
  PERMISSION_ERROR: 'Permission denied. Please check your settings.',
} as const;

// Success messages
export const SUCCESS_MESSAGES = {
  SAVE_SUCCESS: 'Saved successfully!',
  DELETE_SUCCESS: 'Deleted successfully!',
  UPDATE_SUCCESS: 'Updated successfully!',
  LOGIN_SUCCESS: 'Logged in successfully!',
  LOGOUT_SUCCESS: 'Logged out successfully!',
} as const;

// Loading states
export const LOADING_STATES = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
} as const;

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100,
} as const;

// Cache settings
export const CACHE = {
  DEFAULT_TTL: 5 * 60 * 1000, // 5 minutes
  LONG_TTL: 30 * 60 * 1000, // 30 minutes
  SHORT_TTL: 1 * 60 * 1000, // 1 minute
} as const;

// Feature flags
export const FEATURE_FLAGS = {
  ENABLE_ANALYTICS: true,
  ENABLE_CRASH_REPORTING: true,
  ENABLE_PUSH_NOTIFICATIONS: true,
  ENABLE_DARK_MODE: false,
  ENABLE_BIOMETRIC_AUTH: false,
} as const;
