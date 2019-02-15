import { useState, useEffect } from 'react';
import config from '../../config';

const cache = new Map();

function useGithubStars(repo: string) {
  const [stars, setStars] = useState(cache.get(repo) || 0);

  useEffect(() => {
    const cachedStars = cache.get(repo);

    if (cachedStars) {
      setStars(cachedStars);
    } else {
      fetch(
        `${config.github.api}/repos/${repo}?access_token=${
          config.github.token
        }`,
      )
        .then(res => res.json())
        .then(data => {
          setStars(data.stargazers_count);
          cache.set(repo, data.stargazers_count);
        });
    }
  }, [repo]);

  return stars;
}

export default useGithubStars;
