import pages from './gatsby/pages';

export interface CommonMenuItem {
  title: string;
  children?: Menu;
}

export interface ExternalMenuItem extends CommonMenuItem {
  url: string;
  type: 'external';
}

export interface InternalMenuItem extends CommonMenuItem {
  path: keyof typeof pages | null;
  type: 'internal';
}

type MenuItem = ExternalMenuItem | InternalMenuItem;

export type Menu = MenuItem[];

const plugins = [
  'jss-plugin-rule-value-function',
  'jss-plugin-rule-value-observable',
  'jss-plugin-template',
  'jss-plugin-cache',
  'jss-plugin-global',
  'jss-plugin-extend',
  'jss-plugin-nested',
  'jss-plugin-compose',
  'jss-plugin-camel-case',
  'jss-plugin-default-unit',
  'jss-plugin-expand',
  'jss-plugin-vendor-prefixer',
  'jss-plugin-props-sort',
  'jss-plugin-isolate',
];

const menu: Menu = [
  {
    title: 'Introduction',
    type: 'internal',
    path: '/',

    children: [
      {
        title: 'Egghead: From Sass to CSS-in-JS',
        type: 'external',
        url: 'https://egghead.io/courses/convert-scss-sass-to-css-in-js',
      },
      {
        title: 'Features',
        type: 'internal',
        path: '/features',
      },
      {
        title: 'Setup',
        type: 'internal',
        path: '/setup',
      },
      {
        title: 'CDN Links',
        type: 'internal',
        path: '/cdn',
      },
      {
        title: 'Try it out',
        type: 'internal',
        path: '/repl',
      },
      {
        title: 'Who is using',
        type: 'internal',
        path: '/users',
      },
      {
        title: 'Contributing',
        type: 'internal',
        path: '/contributing',
      },
      {
        title: 'FAQ',
        type: 'internal',
        path: '/faq',
      },
    ],
  },
  {
    title: 'Advanced Guides',
    path: null,
    type: 'internal',

    children: [
      {
        title: 'Server-side Rendering',
        type: 'internal',
        path: '/server-side-rendering',
      },
      {
        title: 'Content Security Policy',
        type: 'internal',
        path: '/csp',
      },
      {
        title: 'Performance',
        type: 'internal',
        path: '/performance',
      },
      {
        title: 'CLI Tool',
        type: 'internal',
        path: '/cli',
      },
      {
        title: 'Migrations',
        type: 'internal',
        path: '/migrations',
      },
    ],
  },
  {
    title: 'API Reference',
    path: null,
    type: 'internal',

    children: [
      {
        title: 'JSS Core API',
        type: 'internal',
        path: '/jss-api',
      },
      {
        title: 'JSS Core Styles Syntax',
        type: 'internal',
        path: '/jss-syntax',
      },
      {
        title: 'React-JSS',
        type: 'internal',
        path: '/react-jss',
      },
      {
        title: 'Styled-JSS',
        type: 'internal',
        path: '/styled-jss',
      },
      {
        title: 'Default Preset API',
        type: 'internal',
        path: '/jss-preset-default',
      },
      {
        title: 'Plugins',
        type: 'internal',
        path: '/plugins',

        children: plugins.map(
          (plugin): InternalMenuItem => {
            return {
              type: 'internal',
              path: `/${plugin}`,
              title: plugin,
            };
          },
        ),
      },
    ],
  },
  {
    title: 'Examples',
    type: 'internal',
    path: '/examples',

    children: [
      {
        title: 'React TodoMVC',
        path: '/examples/react-todo-mvc',
        type: 'internal',
      },
      {
        title: 'Calendar',
        path: '/examples/calendar',
        type: 'internal',
      },
      {
        title: 'Perdido Grid System',
        path: '/examples/perdido-example',
        type: 'internal',
      },
      {
        title: 'Function values',
        path: '/examples/function-values',
        type: 'internal',
      },
      {
        title: 'Observable values',
        path: '/examples/observables',
        type: 'internal',
      },
      {
        title: 'Swinging cat',
        path: '/examples/swinging-cat-rx',
        type: 'internal',
      },
    ],
  },
];

export default menu;
