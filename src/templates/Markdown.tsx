import React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import { MarkdownPage } from '../pages';

const styles = {
  container: {
    fontSize: 20,
  },
};

interface Props extends WithStyles<typeof styles> {
  pageContext: MarkdownPage;
}

const Template = ({ classes, pageContext }: Props) => {
  return <div className={classes.container}>{pageContext.file}</div>;
};

export default withStyles(styles)(Template);
