import React from 'react';
import { WithToggleModeType } from './types';

export const withToggleMode: WithToggleModeType = (Components) => (props) => {
  const { mode } = props;
  if (mode === 'editor') {
    return <Components.Editor {...props} />;
  }
  return <Components.View {...props} />;
};
