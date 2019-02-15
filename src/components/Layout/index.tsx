import React, { ReactNode } from 'react';
import Sidebar from '../Sidebar';
import { Theme } from '../../theme';
import withStyles, { WithStyles } from 'react-jss';

const styles = (theme: Theme) => ({
  app: {
    background: theme.pageBackground,
    color: theme.textColor,
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSize,
    fontWeight: 400,
    lineHeight: theme.lineHeight,
    overflow: 'hidden',
    display: 'flex',

    [theme.media.sm]: { flexDirection: 'column' },
  },

  content: {
    flex: 1,
  },
});

interface Props extends WithStyles<typeof styles> {
  children: ReactNode;
}

function Layout({ children, classes }: Props) {
  return (
    <div className={classes.app}>
      <Sidebar />

      <main className={classes.content}>
        {children}
      </main>
    </div>
  );
}

export default withStyles(styles)(Layout);
