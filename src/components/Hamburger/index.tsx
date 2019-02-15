import React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import { rotateZ, translateX } from 'css-functions';

import { Theme } from '../../theme';

export interface OwnProps {
  active: boolean;
}

const size = 22;
const barWeight = 2;

const styles = (theme: Theme) => ({
  hamburger: {
    width: size,
    height: size,
    position: 'relative',
    willChange: 'transform',
    cursor: 'pointer',
    transition: {
      duration: 0.5,
      timingFunction: 'ease-in-out',
    },
  },
  bar: {
    position: 'absolute',
    height: barWeight,
    width: '100%',
    background: theme.textColorInverse,
    opacity: 1,
    left: 0,
    transition: {
      duration: 300,
      timingFunction: 'ease-in-out',
    },
  },
  barFirst: {
    composes: '$bar',
    top: (props: OwnProps) => (props.active ? '50%' : 0),
    marginTop: (props: OwnProps) => (props.active ? -barWeight / 2 : null),
    transform: (props: OwnProps) => (props.active ? rotateZ(135) : null),
  },
  barSecond: {
    composes: '$bar',
    top: '50%',
    marginTop: -barWeight / 2,
    opacity: (props: OwnProps) => (props.active ? 0 : 1),
    transform: (props: OwnProps) =>
      props.active ? translateX(size * 2) : null,
  },
  barThird: {
    composes: '$bar',
    bottom: (props: OwnProps) => (props.active ? '50%' : 0),
    marginBottom: (props: OwnProps) => (props.active ? -barWeight / 2 : 0),
    transform: (props: OwnProps) => (props.active ? rotateZ(-135) : null),
  },
});

interface Props extends OwnProps, WithStyles<typeof styles> {}

const Hamburger = ({ classes }: Props) => (
  <div className={classes.hamburger}>
    <span className={classes.barFirst} />
    <span className={classes.barSecond} />
    <span className={classes.barThird} />
  </div>
);

export default withStyles(styles)(Hamburger);
