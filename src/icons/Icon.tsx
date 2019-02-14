import { ReactElement } from 'react';
import withStyles, { WithStyles } from 'react-jss';

const styles = {
  icon: {
    display: 'inline-block',
    height: '1em',
    maxWidth: '100%',
    userSelect: 'none'
  }
};

interface Props extends WithStyles<typeof styles> {
  children: (props: WithStyles<typeof styles>) => ReactElement<any>,
}

const Icon = ({children, ...rest}: Props) => children(rest);

export default withStyles(styles)(Icon);
