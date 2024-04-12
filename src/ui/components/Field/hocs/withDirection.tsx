import React from 'react';
import { RowPatternFieldType } from './types';

export const withPattern: RowPatternFieldType = (Components) => (props) => {
  const { pattern = 'column' } = props;
  switch (pattern) {
    case 'row':
      return <Components.Row {...props} />;
    default:
      return <Components.Column {...props} />;
  }
};
