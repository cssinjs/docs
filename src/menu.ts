import pages from './pages';

export interface CommonMenuItem {
  title: string;
  children?: Menu;
}

export interface ExternalMenuItem extends CommonMenuItem {
  url: string;
  type: 'external',
}

export interface InternalMenuItem extends CommonMenuItem {
  path: string | null;
  type: 'internal',
}

type MenuItem = ExternalMenuItem | InternalMenuItem;

export type Menu = MenuItem[];

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
        path: pages.features.path,
      },
      {
        title: 'Setup',
        type: 'internal',
        path: pages.setup.path,
      },
      {
        title: 'CDN Links',
        type: 'internal',
        path: pages.cdn.path,
      },
      {
        title: 'Try it out',
        type: 'internal',
        path: pages.repl.path,
      },
      {
        title: 'Who is using',
        type: 'internal',
        path: pages.users.path,
      },
      {
        title: 'Contributing',
        type: 'internal',
        path: pages.contributing.path,
      },
      {
        title: 'FAQ',
        type: 'internal',
        path: pages.faq.path,
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
];

export default menu;
