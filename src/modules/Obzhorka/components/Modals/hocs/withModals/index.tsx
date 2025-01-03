import { WithModalsType } from './types';
import React from 'react';

export const withModals: WithModalsType = (Components) => (props) => {
  const { modal } = props;
  if (!modal) {
    return null;
  }
  const Component = Components[modal];
  return <Component />;
};
