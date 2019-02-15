import React, { useState, useCallback } from 'react';
import withStyles, { WithStyles } from 'react-jss';
import { Link } from 'gatsby';
import { translateX } from 'css-functions';
import { size, position } from 'polished';

import Logo from '../../icons/Logo';
import GithubWidget from '../../components/GithubWidget';
import Hamburger from '../../components/Hamburger';
import config from '../../config';
import Menu from '../../components/Menu';
import menu from '../../menu';
import { Theme } from '../../theme';

const sidebarWidth = 320;

const styles = (theme: Theme) => ({
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
    flexGrow: 1,
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',

    [theme.media.sm]: {
      padding: [10, 20],
      justifyContent: 'space-between',
    },
  },

  logoContainer: {
    textAlign: 'center',
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
    paddingBottom: 80,

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


interface Props extends WithStyles<typeof styles> {}

function Sidebar({ classes }: Props) {
  const [showMenu, setShowMenu] = useState(false);
  const handleToggleMenu = useCallback(() => {
    setShowMenu(show => !show);
  }, []);

  return (
    <aside className={classes.sidebar}>
      <nav className={classes.navbar}>
        <Link to="/" className={classes.logoContainer}>
          <Logo className={classes.logo} />
        </Link>

        <button className={classes.hamburger} onClick={handleToggleMenu}>
          <Hamburger active={showMenu} />
        </button>
      </nav>

      <div className={`${classes.menuContainer} ${showMenu && classes.active}`}>
        <GithubWidget className={classes.github} repo={config.github.repo} />

        <Menu menu={menu} level={0} />
      </div>
    </aside>
  );
}

export default withStyles(styles)(Sidebar);
