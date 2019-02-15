import path from 'path';

import pages, { MarkdownPage, IFramePage, Page } from './src/pages';

interface Actions {
  createPage<Context extends object>(options: {
    path: string;
    component: string;
    context: Context;
  }): void;
}

function getComponent(page: MarkdownPage | IFramePage) {
  switch (page.template) {
    case 'markdown':
      return path.resolve('./src/templates/Markdown.tsx');
    case 'iframe':
      return path.resolve('./src/templates/IFrame.tsx');
  }
}

export function createPages({ actions }: { actions: Actions }) {
  const pageKeys = Object.keys(pages) as Array<keyof typeof pages>;

  pageKeys.forEach(pageKey => {
    const page: Page = pages[pageKey];

    actions.createPage({
      path: page.path,
      component: getComponent(page),
      context: page,
    });
  });
}
