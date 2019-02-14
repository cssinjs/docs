import path from 'path';

import pages from './src/pages';

export function createPages({ actions }) {
  Object.keys(pages).forEach((page) => {
    actions.createPage({
      path: pages[page].path,
      component: path.resolve(`./src/templates/md-doc.tsx`),
      context: { page: pages[page] },
    });
  });
}
