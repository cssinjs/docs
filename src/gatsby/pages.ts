import config from '../config';

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
  '/': {
    file: '/docs/intro.md',
    repo: 'jss',
    template: 'markdown',
  },

  '/features': {
    file: '/docs/features.md',
    repo: 'jss',
    template: 'markdown',
  },

  '/setup': {
    file: '/docs/setup.md',
    repo: 'jss',
    template: 'markdown',
  },

  '/cdn': {
    file: '/docs/cdn.md',
    repo: 'jss',
    template: 'markdown',
  },

  '/users': {
    file: '/docs/users.md',
    repo: 'jss',
    template: 'markdown',
  },

  '/contributing': {
    file: '/contributing.md',
    repo: 'jss',
    template: 'markdown',
  },

  '/faq': {
    file: '/docs/faq.md',
    repo: 'jss',
    template: 'markdown',
  },

  '/repl': {
    template: 'iframe',
    url: config.repl,
  },

  '/examples': {
    template: 'markdown',
    repo: 'examples',
    file: '/readme.md',
  },

  '/examples/react-todo-mvc': {
    template: 'iframe',
    url: 'https://cssinjs.github.io/react-todomvc-jss/',
  },

  '/examples/calendar': {
    template: 'iframe',
    url: 'https://cssinjs.github.io/examples/calendar/',
  },

  '/examples/perdido-example': {
    template: 'iframe',
    url: 'https://cssinjs.github.io/examples/perdido/',
  },

  '/examples/function-values': {
    template: 'iframe',
    url: 'https://cssinjs.github.io/examples/function-values/',
  },

  '/examples/observables': {
    template: 'iframe',
    url: 'https://cssinjs.github.io/examples/observables/',
  },

  '/examples/swinging-cat-rx': {
    template: 'iframe',
    url: 'https:////cssinjs.github.io/examples/swinging-cat-rx/',
  },
};

export default pages;
