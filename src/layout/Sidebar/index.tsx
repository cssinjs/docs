import React, { useState, useCallback } from 'react';
import withStyles, { WithStyles } from 'react-jss';
import { Link } from 'gatsby';

import Logo from '../../icons/Logo';
import GithubWidget from '../../components/GithubWidget';
import Hamburger from '../../components/Hamburger';

import styles from './styles'
import config from '../../config';
import Menu from '../../components/Menu';
import menu from '../../menu';

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
  )
}


export default withStyles(styles)(Sidebar)
