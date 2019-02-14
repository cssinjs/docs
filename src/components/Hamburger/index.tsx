import React from 'react'
import withStyles, { WithStyles } from 'react-jss';

import styles from './styles';

export interface OwnProps {
  active: boolean;
}

interface Props extends OwnProps, WithStyles<typeof styles> {}

const Hamburger = ({classes}: Props) => (
  <div className={classes.hamburger}>
    <span className={classes.barFirst} />
    <span className={classes.barSecond} />
    <span className={classes.barThird} />
  </div>
);

export default withStyles(styles)(Hamburger)