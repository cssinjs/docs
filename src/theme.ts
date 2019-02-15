const base = {
  dark: '#24292e',
  light: '#eee',
};

const theme = {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  fontSize: 16,
  lineHeight: 1.5,

  themeColor: '#f7df1e', // Main theme color

  pageBackground: '#fff',

  titleColor: base.dark,
  titleColorDark: '#000',
  textColor: base.dark,
  textColorInverse: base.light,
  textColorInverseActive: '#fff',

  cardColor: '#fff',

  sidebarBg: base.dark,
  sidebarBgDark: '#1b1f23',
  sidebarColor: base.light,

  codeFontFamily:
    '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
  codeBackground: '#f6f8fa',

  // Size variables
  contentWidth: 1000,

  transition: (duration = `200ms`, delay = '0ms') => ({
    property: 'all',
    timingFunction: 'cubic-bezier(0.77, 0, 0.175, 1)',
    duration,
    delay,
  }),

  // Breakpoints
  media: {
    lg: '@media (max-width: 1200px)',
    md: '@media (max-width: 992px)',
    sm: '@media (max-width: 768px)',
    xs: '@media (max-width: 480px)',
  },
};

export type Theme = typeof theme;

export default theme;
