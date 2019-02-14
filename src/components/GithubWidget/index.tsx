import React, { useState, useEffect } from 'react';
import withStyles, { WithStyles } from 'react-jss';

import GithubIcon from '../../icons/Github';
import StarIcon from '../../icons/Star'
import styles from './styles'
import config from '../../config';

const formatStars = (num: number) => String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',')

interface Props extends WithStyles<typeof styles> {
  repo: string,
  className: string,
}

const cache = new Map<string, number>();

function GithubWidget({ classes, repo, className }: Props) {
  const [stars, setStars] = useState(cache.get(repo) || 0);

  useEffect(() => {
    const cachedStars = cache.get(repo);

    if (cachedStars) {
      setStars(cachedStars);
    } else {
      fetch(`${config.github.api}/repos/${repo}?access_token=${config.github.token}`)
        .then(res => res.json())
        .then(data => {
          setStars(data.stargazers_count);
          cache.set(repo, data.stargazers_count);
        })
    }
  }, [repo]);

  return (
    <a
      href={`${config.github.url}/${repo}`}
      className={`${classes.githubWidget} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={classes.item}>
        <StarIcon className={classes.iconStar} />
        <span className={classes.text}>
          {formatStars(stars)}
        </span>
      </span>
      <span className={classes.item}>
        <GithubIcon className={classes.iconGithub} />
        <span className={classes.text}>
          GitHub
        </span>
      </span>
    </a>
  )
}

GithubWidget.defaultProps = { className: '' };

export default withStyles(styles)(GithubWidget)