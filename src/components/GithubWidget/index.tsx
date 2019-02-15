import React from 'react';
import withStyles, { WithStyles } from 'react-jss';

import GithubIcon from '../../icons/Github';
import StarIcon from '../../icons/Star';
import config from '../../config';
import { Theme } from '../../theme';
import useGithubStars from './use-github-stars';

const formatStars = (num: number) =>
  String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const styles = (theme: Theme) => ({
  githubWidget: {
    color: theme.textColorInverse,
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontWeight: 400,
    '&:hover': { opacity: 0.8 },
  },
  item: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    padding: [15, 0],
    color: theme.textColorInverseActive,
  },
  iconStar: {
    marginRight: 8,
    fill: theme.themeColor,
  },
  iconGithub: {
    marginRight: 8,
    fill: theme.textColorInverse,
  },
});

interface Props extends WithStyles<typeof styles> {
  repo: string;
  className: string;
}

function GithubWidget({ classes, repo, className }: Props) {
  const stars = useGithubStars(repo);

  return (
    <a
      href={`${config.github.url}/${repo}`}
      className={`${classes.githubWidget} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {stars > 0 && (
        <span className={classes.item}>
          <StarIcon className={classes.iconStar} />
          <span>{formatStars(stars)}</span>
        </span>
      )}

      <span className={classes.item}>
        <GithubIcon className={classes.iconGithub} />
        <span>GitHub</span>
      </span>
    </a>
  );
}

GithubWidget.defaultProps = { className: '' };

export default withStyles(styles)(GithubWidget);
