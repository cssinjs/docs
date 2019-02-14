import React, { ReactElement } from 'react';
import Layout from './src/layout';
import theme from './src/theme';
import { ThemeProvider } from 'react-jss';

import 'modern-normalize/modern-normalize.css';

interface Page {
  element: ReactElement<any>,
}

export function onInitialClientRender() {
  const style = window.document.getElementById("server-side-jss");

  console.log(style);

  if (style && style.parentNode) {
    style.parentNode.removeChild(style);
  }
}

export function wrapPageElement({ element }: Page) {
  return (
    <Layout>
      {element}
    </Layout>
  );
}

export function wrapRootElement({ element }: Page) {
  return (
    <ThemeProvider theme={theme}>
      {element}
    </ThemeProvider>
  );
}
