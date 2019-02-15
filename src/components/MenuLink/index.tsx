import React from 'react';
import { Link } from 'gatsby';
import withStyles, { WithStyles } from 'react-jss';

import { Theme } from '../../theme';
import { InternalMenuItem, ExternalMenuItem } from '../../menu';

interface OwnProps {
  item: InternalMenuItem | ExternalMenuItem;
  level: number;
}

const styles = (theme: Theme) => ({
  menuItem: {
    color: theme.textColorInverse,
    display: 'block',
    textDecoration: 'none',
    opacity: (props: OwnProps) => (props.level === 0 ? 1 : 0.8),
    fontWeight: 400,
    fontSize: (props: OwnProps) => (props.level === 0 ? 16 : 14),
    padding: (props: OwnProps) => (props.level === 0 ? '5px 0' : 0),
    '&:hover': {
      cursor: 'pointer',
      color: theme.textColorInverseActive,
      opacity: 1,
    },
  },
  active: {
    opacity: 1,
    color: theme.themeColor,
    '&:hover': {
      color: theme.themeColor,
    },
  },
});

interface Props extends OwnProps, WithStyles<typeof styles> {}

function getPathForItem(item: InternalMenuItem): string {
  if (item.path === null) {
    if (item.children && item.children[0]) {
      return getPathForItem(item.children[0] as any);
    }

    return '';
  }

  return item.path;
}

function MenuLink({ classes, item }: Props) {
  switch (item.type) {
    case 'external': {
      return (
        <a
          className={classes.menuItem}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.title}
        </a>
      );
    }
    case 'internal': {
      return (
        <Link
          className={classes.menuItem}
          activeClassName={item.path === null ? undefined : classes.active}
          to={getPathForItem(item)}
        >
          {item.title}
        </Link>
      );
    }
    default:
      return null;
  }
}

export default withStyles(styles)(MenuLink);
