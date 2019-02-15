import 'modern-normalize/modern-normalize.css';

export * from './common';

export const onInitialClientRender = () => {
  const style = window.document.getElementById('server-side-jss');

  console.log(style);

  if (style && style.parentNode) {
    style.parentNode.removeChild(style);
  }
};
