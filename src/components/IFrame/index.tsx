import React from 'react'
import withStyles, { WithStyles } from 'react-jss';

const styles = {
  iframe: {
    flex: 1,
    height: '100vh',
    border: 0,
    display: 'block'
  }
};

interface Props extends WithStyles<typeof styles> {
  src: string,
}

function IFrame({src, classes, ...props}: Props) {
  return <iframe src={src} className={classes.iframe} {...props} />
}

export default withStyles(styles)(IFrame);
