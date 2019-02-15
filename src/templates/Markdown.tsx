import React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import { MarkdownPage } from '../gatsby/pages';

const styles = {
  container: {
    fontSize: 20,
  },
};

interface Props extends WithStyles<typeof styles> {
  pageContext: { page: MarkdownPage };
}

const Template = ({ classes, pageContext }: Props) => {
  return <div className={classes.container}>{pageContext.page.file}</div>;
};

export default withStyles(styles)(Template);
