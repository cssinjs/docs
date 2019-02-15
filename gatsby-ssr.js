import React from 'react';
import { renderToString } from 'react-dom/server';
import { createGenerateId, JssProvider, ThemeProvider, SheetsRegistry } from 'react-jss';
import theme from './src/theme.ts';
import Layout from './src/layout/index.tsx';

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
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
};

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};
