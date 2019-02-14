import React from 'react'

import MenuItem from '../MenuItem'
import { Menu as MenuType } from '../../menu';
import withStyles, { WithStyles } from 'react-jss';

interface OwnProps {
  menu: MenuType,
  level: number,
}

const styles = {
  menu: {
    padding(props: OwnProps) {
      switch (props.level) {
        case 0: return '0px 30px';
        default: return `0 0 0 ${props.level * 15}px`;
      }
    },
  },
};

interface Props extends OwnProps, WithStyles<typeof styles> {}

function Menu({
  menu,
  level,
  classes,
}: Props) {
  return (
    <ul className={classes.menu}>
      {menu.map(item => (
        <MenuItem
          key={item.title}
          item={item}
          level={level}
        />
      ))}
    </ul>
  );
}

export default withStyles(styles)(Menu);
