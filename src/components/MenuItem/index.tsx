import React from 'react';
import withStyles, { WithStyles } from 'react-jss';

import { ExternalMenuItem, InternalMenuItem } from '../../menu';
import Menu from '../Menu';
import MenuLink from '../MenuLink';

export interface OwnProps {
  level: number;
  item: InternalMenuItem | ExternalMenuItem;
}

const styles = {
  menuItem: {
    listStyleType: 'none',
    padding: (props: OwnProps) => (props.level === 0 ? `10px 0 0 0` : 0),
  },
};

interface Props extends OwnProps, WithStyles<typeof styles> {}

function MenuItem({ classes, item, level }: Props) {
  return (
    <li className={classes.menuItem}>
      <MenuLink item={item} level={level} />

      {item.children && <Menu menu={item.children} level={level + 1} />}
    </li>
  );
}

MenuItem.defaultProps = { level: 0 };

export default withStyles(styles)(MenuItem);
