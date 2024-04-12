import { createElement } from 'react';
import { renderToString } from 'react-dom/server';

export const parseTag = (text: string) => {
  return (
    text.replace(/#[0-9a-zA-Zа-яёА-ЯЁ_]*/g, (match, offset, string) => {
      return renderToString(
        createElement('span', {
          className: 'text__tag',
          children: `${match}`,
        })
      );
    }) || ''
  );
};
