import config from './config';

export interface CommonPage {
  path: string;
}

export interface MarkdownPage extends CommonPage {
  file: string;
  repo: string;
  template: 'markdown';
}

export interface IFramePage extends CommonPage {
  url: string;
  template: 'iframe';
}

export type Page = MarkdownPage | IFramePage;

const pages = {
  features: {
    path: '/features',
    file: '/docs/features.md',
    repo: 'jss',
    template: 'markdown',
  },

  setup: {
    path: '/setup',
    file: '/docs/setup.md',
    repo: 'jss',
    template: 'markdown',
  },

  cdn: {
    path: '/cdn',
    file: '/docs/cdn.md',
    repo: 'jss',
    template: 'markdown',
  },

  users: {
    path: '/users',
    file: '/docs/users.md',
    repo: 'jss',
    template: 'markdown',
  },

  contributing: {
    path: '/contributing',
    file: '/contributing.md',
    repo: 'jss',
    template: 'markdown',
  },

  faq: {
    path: '/faq',
    file: '/docs/faq.md',
    repo: 'jss',
    template: 'markdown',
  },

  repl: {
    path: '/repl',
    template: 'iframe',
    url: config.repl,
  },
};

export default pages;
