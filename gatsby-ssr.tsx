import {
  JssProvider,
  SheetsRegistry,
  createGenerateId,
  ThemeProvider,
} from 'react-jss';
import { renderToString } from 'react-dom/server';
import React, { ReactElement } from 'react';
import Layout from './src/layout';
import theme from './src/theme';

interface Renderer {
  bodyComponent: ReactElement<any>;
  replaceBodyHTMLString: (content: string) => void;
  setHeadComponents: (comps: ReactElement<any>[]) => void;
}

export function replaceRenderer({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}: Renderer) {
  const registry = new SheetsRegistry();

  replaceBodyHTMLString(
    renderToString(
      <JssProvider registry={registry} generateId={createGenerateId()}>
        {bodyComponent}
      </JssProvider>,
    ),
  );

  setHeadComponents([
    <style
      type="text/css"
      id="server-side-jss"
      key="server-side-jss"
      dangerouslySetInnerHTML={{ __html: registry.toString() }}
    />,
  ]);
}

interface Page {
  element: ReactElement<any>;
}

export function wrapPageElement({ element }: Page) {
  return <Layout>{element}</Layout>;
}

export function wrapRootElement({ element }: Page) {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
}
