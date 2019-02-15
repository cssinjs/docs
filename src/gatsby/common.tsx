import React, { ReactElement } from 'react';
import { ThemeProvider } from 'react-jss';

import Layout from '../components/Layout';
import theme from '../theme';

interface Page {
  element: ReactElement<any>;
}

export const wrapPageElement = ({ element }: Page) => {
  return <Layout>{element}</Layout>;
};

export const wrapRootElement = ({ element }: Page) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};
