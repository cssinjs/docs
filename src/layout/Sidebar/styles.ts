import { translateX } from 'css-functions';
import { size, position } from 'polished';

import { Theme } from '../../theme';

const sidebarWidth = 320;

export default (theme: Theme) => ({
  sidebar: {
    background: theme.sidebarBg,
    color: theme.sidebarColor,
    width: sidebarWidth,
    zIndex: 100,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'scroll',
    overflowX: 'hidden',

    [theme.media.sm]: {
      height: 70,
      overflow: 'visible',
      width: '100vw',
    },
  },

  navbar: {
    display: 'flex',
    flexDirection: 'column',

    [theme.media.sm]: {
      padding: [10, 20],
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
  },

  logoContainer: {
    textAlign: 'center',
    flexShrink: 0,
    margin: 30,

    [theme.media.sm]: {
      margin: 0,
      justifyContent: 'space-between',
    },
  },

  logo: {
    ...size(100),
    cursor: 'pointer',

    [theme.media.sm]: { ...size(50) },
  },

  github: {
    flex: 1,
    padding: [0, 30],
    background: theme.sidebarBgDark,

    [theme.media.sm]: { background: 'transparent' },
  },

  // Toggle widget
  hamburger: {
    display: 'none',
    // Remove default button styles
    marginLeft: 16,
    background: 0,
    border: 0,
    padding: 0,
    outline: 0,
    boxShadow: 'none',
    cursor: 'pointer',

    [theme.media.sm]: { display: 'block' },
  },

  menuContainer: {
    transition: theme.transition(),
    background: theme.sidebarBg,

    [theme.media.sm]: {
      ...position('fixed', 70, 0, 0, 0),
      overflowY: 'auto',
      overflowX: 'hidden',
      transform: translateX('100%'),
    },
  },

  active: {
    [theme.media.sm]: {
      transform: translateX(0),
    },
  },
});
