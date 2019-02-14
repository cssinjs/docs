import React from "react"
import withStyles from 'react-jss';

const Template = ({ classes, pageContext }) => {
  return (
    <div className={classes.container}>
      {pageContext.page.file}
    </div>
  )
};

const styles = {
  container: {
    fontSize: 20,
  },
};

export default withStyles(styles)(Template);