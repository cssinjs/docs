import { Theme } from '../../theme';
import { OwnProps } from './index';

export default (theme: Theme) => ({
  menuItem: {
    color: theme.textColorInverse,
    display: 'block',
    textDecoration: 'none',
    opacity: (props: OwnProps) => props.level === 0 ? 1 : 0.8,
    fontWeight: 400,
    fontSize: (props: OwnProps) => props.level === 0 ? 16 : 14,
    padding: (props: OwnProps) => props.level === 0 ? '5px 0' : 0,
    '&:hover': {
      cursor: 'pointer',
      color: theme.textColorInverseActive,
      opacity: 1
    }
  },
  active: {
    opacity: 1,
    color: theme.themeColor,
    '&:hover': {
      color: theme.themeColor,
    }
  },
});
