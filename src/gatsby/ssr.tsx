import { renderToString } from 'react-dom/server';
import { JssProvider, createGenerateId, SheetsRegistry } from 'react-jss';
import React, { ReactElement } from 'react';

export * from './common';

interface Renderer {
  bodyComponent: ReactElement<any>;
  replaceBodyHTMLString: (body: string) => void;
  setHeadComponents: (components: Array<ReactElement<any>>) => void;
}

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}: Renderer) => {
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
