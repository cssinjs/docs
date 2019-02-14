import { Theme } from '../../theme';

export default (theme: Theme) => ({
  githubWidget: {
    opacity: 1,
    color: theme.textColorInverse,
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontWeight: 400,
    '&:hover': { opacity: 0.8 }
  },
  item: {
    textAlign: 'center',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // Fix for IE10
    maxHeight: 50,
    cursor: 'pointer',
    padding: {
      top: 15,
      bottom: 15
    }
  },
  text: {
    color: theme.textColorInverseActive,
    cursor: 'inherit'
  },
  icon: {
    margin: {
      top: -3,
      right: 8
    },
    cursor: 'inherit'
  },
  iconStar: {
    composes: '$icon',
    fill: theme.themeColor,
  },
  iconGithub: {
    composes: '$icon',
    fill: theme.textColorInverse,
  }
})
