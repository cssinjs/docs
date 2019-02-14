import React from 'react';
import { MenuItem } from '../../menu';
import { Link } from 'gatsby';
import withStyles, { WithStyles } from 'react-jss';
import styles from './styles';

export interface OwnProps {
  item: MenuItem,
  level: number,
}

interface Props extends OwnProps, WithStyles<typeof styles> {}

function getPathForItem(item: MenuItem): string {
  if (item.path === null) {
    if (item.children && item.children[0]) {
      return getPathForItem(item.children[0]);
    }

    return '';
  }

  return item.path;
}

function MenuLink({ classes, item }: Props) {
  if (item.url) {
    return (
      <a className={classes.menuItem} href={item.url} target="_blank" rel="noopener noreferrer">
        {item.title}
      </a>
    )
  }

  return (
    <Link
      className={classes.menuItem}
      activeClassName={item.path === null ? undefined : classes.active}
      to={getPathForItem(item)}
    >
      {item.title}
    </Link>
  )
}

export default withStyles(styles)(MenuLink);