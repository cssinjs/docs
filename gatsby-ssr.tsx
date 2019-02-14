import {
  JssProvider,
  SheetsRegistry,
  createGenerateId, ThemeProvider,
} from 'react-jss';
import { renderToString } from "react-dom/server";
import React from "react";
import Layout from './src/layout';
import theme from './src/theme';

export function replaceRenderer({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) {
  const registry = new SheetsRegistry();

  replaceBodyHTMLString(
    renderToString(
      <JssProvider
        registry={registry}
        generateId={createGenerateId()}
      >
        {bodyComponent}
      </JssProvider>
    )
  );

  console.log(registry.toString());

  setHeadComponents([
    <style
      type="text/css"
      id="server-side-jss"
      key="server-side-jss"
      dangerouslySetInnerHTML={{ __html: registry.toString() }}
    />
  ]);
}

export function wrapPageElement({ element }) {
  return (
    <Layout>
      {element}
    </Layout>
  );
}

export function wrapRootElement({ element }) {
  return (
    <ThemeProvider theme={theme}>
      {element}
    </ThemeProvider>
  );
}