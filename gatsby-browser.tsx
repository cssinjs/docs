import React from 'react';
import Layout from './src/layout';
import theme from './src/theme';
import { ThemeProvider } from 'react-jss';

import 'modern-normalize/modern-normalize.css';

export function onInitialClientRender() {
  const style = window.document.getElementById("server-side-jss");

  console.log(style);

  if (style && style.parentNode) {
    style.parentNode.removeChild(style);
  }
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
