import pages from './pages';

export interface CommonMenuItem {
  title: string;
  children?: Menu;
}

export interface ExternalMenuItem extends CommonMenuItem {
  external: true;
  url: string;
}

export interface InternalMenuItem extends CommonMenuItem {
  path: string | null;
}

type MenuItem = ExternalMenuItem | InternalMenuItem;

export type Menu = MenuItem[];

const menu: Menu = [
  {
    title: 'Introduction',
    path: '/',

    children: [
      {
        title: 'Egghead: From Sass to CSS-in-JS',
        external: true,
        url: 'https://egghead.io/courses/convert-scss-sass-to-css-in-js',
      },
      {
        title: 'Features',
        path: pages.features.path,
      },
      {
        title: 'Setup',
        path: pages.setup.path,
      },
      {
        title: 'CDN Links',
        path: pages.cdn.path,
      },
      {
        title: 'Try it out',
        path: pages.repl.path,
      },
      {
        title: 'Who is using',
        path: pages.users.path,
      },
      {
        title: 'Contributing',
        path: pages.contributing.path,
      },
      {
        title: 'FAQ',
        path: pages.faq.path,
      },
    ],
  },
  {
    title: 'Advanced Guides',
    path: null,

    children: [
      {
        title: 'Server-side Rendering',
        path: '/server-side-rendering',
      },
      {
        title: 'Content Security Policy',
        path: '/csp',
      },
      {
        title: 'Performance',
        path: '/performance',
      },
      {
        title: 'CLI Tool',
        path: '/cli',
      },
      {
        title: 'Migrations',
        path: '/migrations',
      },
    ],
  },
];

export default menu;
