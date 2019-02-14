export interface Page {
  path: string,
  repo: string,
  file: string,
}

const pages: Record<string, Page> = {
  features: {
    path: '/features',
    file: '/docs/features.md',
    repo: 'jss',
  },

  setup: {
    path: '/setup',
    file: '/docs/setup.md',
    repo: 'jss',
  },

  cdn: {
    path: '/cdn',
    file: '/docs/cdn.md',
    repo: 'jss',
  },

  users: {
    path: '/users',
    file: '/docs/users.md',
    repo: 'jss',
  },

  contributing: {
    path: '/contributing',
    file: '/contributing.md',
    repo: 'jss',
  },

  faq: {
    path: '/faq',
    file: '/docs/faq.md',
    repo: 'jss',
  },
};

export default pages;
