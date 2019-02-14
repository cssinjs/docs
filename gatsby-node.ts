import path from 'path';

import pages from './src/pages';

interface Actions {
  createPage<Context extends object>(options: {
    path: string,
    component: string,
    context: Context,
  }): void;
}

export function createPages({ actions }: { actions: Actions }) {
  Object.keys(pages).forEach((page) => {
    actions.createPage({
      path: pages[page].path,
      component: path.resolve(`./src/templates/md-doc.tsx`),
      context: { page: pages[page] },
    });
  });
}
