import React from 'react';
import { Overlay } from '../../../Overlay';
import { WithOverlayType } from './types';

export const withOverlay: WithOverlayType = (Component) => (props) => {
  const { hiddenOverlay } = props;
  return (
    <>
      <Component {...props} />
      {!hiddenOverlay && <Overlay />}
    </>
  );
};
