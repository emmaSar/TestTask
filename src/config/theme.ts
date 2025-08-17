import { Colors } from './Colors';
import { LAYOUT, FONT_SIZE, LINE_HEIGHT, Z_INDEX } from './constants';

export interface Theme {
  colors: typeof Colors;
  layout: typeof LAYOUT;
  typography: {
    fontSizes: typeof FONT_SIZE;
    lineHeights: typeof LINE_HEIGHT;
    fontWeights: {
      regular: '400';
      medium: '500';
      semiBold: '600';
      bold: '700';
    };
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  borderRadius: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    round: number;
  };
  shadows: {
    sm: any;
    md: any;
    lg: any;
  };
  zIndex: typeof Z_INDEX;
}

export const theme: Theme = {
  colors: Colors,
  layout: LAYOUT,
  typography: {
    fontSizes: FONT_SIZE,
    lineHeights: LINE_HEIGHT,
    fontWeights: {
      regular: '400',
      medium: '500',
      semiBold: '600',
      bold: '700',
    },
  },
  spacing: {
    xs: LAYOUT.PADDING.XS,
    sm: LAYOUT.PADDING.SM,
    md: LAYOUT.PADDING.MD,
    lg: LAYOUT.PADDING.LG,
    xl: LAYOUT.PADDING.XL,
  },
  borderRadius: {
    xs: LAYOUT.BORDER_RADIUS.XS,
    sm: LAYOUT.BORDER_RADIUS.SM,
    md: LAYOUT.BORDER_RADIUS.MD,
    lg: LAYOUT.BORDER_RADIUS.LG,
    xl: LAYOUT.BORDER_RADIUS.XL,
    round: LAYOUT.BORDER_RADIUS.ROUND,
  },
  shadows: {
    sm: LAYOUT.SHADOW.SM,
    md: LAYOUT.SHADOW.MD,
    lg: LAYOUT.SHADOW.LG,
  },
  zIndex: Z_INDEX,
};

// Theme hook for React components
export const useTheme = (): Theme => theme;

// Common style presets
export const commonStyles = {
  container: {
    flex: 1,
    backgroundColor: Colors.gray0,
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
  },
  card: {
    backgroundColor: Colors.gray0,
    borderRadius: LAYOUT.BORDER_RADIUS.MD,
    padding: LAYOUT.PADDING.MD,
    ...LAYOUT.SHADOW.SM,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.gray10,
    borderRadius: LAYOUT.BORDER_RADIUS.SM,
    padding: LAYOUT.PADDING.SM,
    fontSize: FONT_SIZE.MD,
    color: Colors.gray100,
  },
  button: {
    primary: {
      backgroundColor: Colors.primary100,
      borderRadius: LAYOUT.BORDER_RADIUS.MD,
      paddingVertical: LAYOUT.PADDING.SM,
      paddingHorizontal: LAYOUT.PADDING.LG,
      alignItems: 'center',
      justifyContent: 'center',
    },
    secondary: {
      backgroundColor: Colors.gray0,
      borderWidth: 1,
      borderColor: Colors.primary100,
      borderRadius: LAYOUT.BORDER_RADIUS.MD,
      paddingVertical: LAYOUT.PADDING.SM,
      paddingHorizontal: LAYOUT.PADDING.LG,
      alignItems: 'center',
      justifyContent: 'center',
    },
    disabled: {
      backgroundColor: Colors.gray20,
      borderRadius: LAYOUT.BORDER_RADIUS.MD,
      paddingVertical: LAYOUT.PADDING.SM,
      paddingHorizontal: LAYOUT.PADDING.LG,
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
} as const;

// Responsive design helpers
export const responsive = {
  // Responsive font sizes
  fontSize: (size: keyof typeof FONT_SIZE) => {
    const baseSize = FONT_SIZE[size];
    return {
      xs: baseSize * 0.8,
      sm: baseSize * 0.9,
      md: baseSize,
      lg: baseSize * 1.1,
      xl: baseSize * 1.2,
    };
  },

  // Responsive spacing
  spacing: (base: number) => {
    return {
      xs: base * 0.5,
      sm: base * 0.75,
      md: base,
      lg: base * 1.25,
      xl: base * 1.5,
    };
  },

  // Responsive padding/margin
  padding: (base: number) => ({
    horizontal: base,
    vertical: base * 0.75,
    top: base * 0.75,
    bottom: base * 0.75,
    left: base,
    right: base,
  }),
} as const;
