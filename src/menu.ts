export interface MenuItem {
  title: string,
  path: string | null,
  external?: boolean,
  children?: Menu,
  url?: string,
}

export type Menu = MenuItem[];

const menu: Menu = [
  {
    title: 'Introduction',
    path: '/',

    children: [{
      title: 'From Sass to CSS-in-JS',
      path: '/'
    }, {
      title: 'Features',
      path: '/features',
    }, {
      title: 'Setup',
      path: '/setup',
    }, {
      title: 'CDN Links',
      path: '/cdn',
    }, {
      title: 'Try it out',
      path: '/repl',
    }, {
      title: 'Who is using',
      path: '/users',
    }, {
      title: 'Contributing',
      path: '/contributing',
    }, {
      title: 'FAQ',
      path: '/faq',
    }],
  },
  {
    title: 'Advanced Guides',
    path: null,

    children: [{
      title: 'Server-side Rendering',
      path: '/server-side-rendering',
    }, {
      title: 'Content Security Policy',
      path: '/csp',
    }, {
      title: 'Performance',
      path: '/performance',
    }, {
      title: 'CLI Tool',
      path: '/cli',
    }, {
      title: 'Migrations',
      path: '/migrations',
    }],
  }
];

export default menu;