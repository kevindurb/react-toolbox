import React from 'react';
import { render } from 'react-dom';
import { renderToString } from 'react-dom/server';
import {JssProvider, SheetsRegistry} from 'react-jss';
import indexTemplate from './templates/index.ejs';

export default function (component) {
  if (typeof document !== 'undefined') {
    render(
      <JssProvider>
        {component}
      </JssProvider>,
      document.getElementById('root')
    );
  }

  return (locals) => {
    const sheets = new SheetsRegistry();

    const content = renderToString(
      <JssProvider registry={sheets}>
        {component}
      </JssProvider>
    );

    return indexTemplate({
      content,
      scripts: [
        locals.assets.manifest,
        locals.assets.main,
      ],
      styles: sheets.toString(),
    });
  };
}
