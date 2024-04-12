import { createElement } from 'react';
import { renderToString } from 'react-dom/server';

export const formatTagForEditor = (text: string) => {
  return text.replace(/#(?<tag>[0-9a-zA-Zа-яёА-ЯЁ_]*)/g, (match, tag) => {
    return renderToString(
      createElement('a', {
        href: `#${tag}`,
        rel: 'noopener noreferrer',
        target: '_blank',
        children: `#${tag}`,
      })
    );
  });
};

