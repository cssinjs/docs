import path from 'path';

import pages, { MarkdownPage, IFramePage, Page } from './pages';

interface Actions {
  createPage<Context extends object>(options: {
    path: string;
    component: string;
    context: Context;
  }): void;
}

const getComponentForPage = (page: MarkdownPage | IFramePage) => {
  switch (page.template) {
    case 'markdown':
      return path.resolve('./src/templates/Markdown.tsx');
    case 'iframe':
      return path.resolve('./src/templates/IFrame.tsx');
  }
};

export const createPages = async ({ actions }: { actions: Actions }) => {
  const paths = Object.keys(pages) as Array<keyof typeof pages>;

  await Promise.all(
    paths.map(async path => {
      const page: Page = pages[path] as any;

      switch (page.template) {
        case 'iframe': {
          actions.createPage({
            path: path,
            component: getComponentForPage(page),
            context: { page },
          });
          break;
        }
        case 'markdown': {
          // TODO: Fetch markdown here
          actions.createPage({
            path: path,
            component: getComponentForPage(page),
            context: { page },
          });
        }
      }
    }),
  );
};
