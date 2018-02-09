import { render } from 'react-dom';
import { renderToString } from 'react-dom/server';
import indexTemplate from './templates/index.ejs';

export default function (component) {
  if (typeof document !== 'undefined') {
    render(
      component,
      document.getElementById('root')
    );
  }

  return (locals) => {
    const content = renderToString(component);
    return indexTemplate({
      content,
      scripts: [
        locals.assets.manifest,
        locals.assets.main,
      ]
    });
  };
}
