import { Component } from 'react';
import { WithLoaderType } from './types';
import { Loader } from '../../../../TimeManager/component/UI/Loader';
import { observer } from 'mobx-react-lite';

export const withLoader: WithLoaderType = (Component) =>
  observer((props) => {
    if (props.status.isLoading || props.status.isInitial) {
      return <Loader />;
    }
    return <Component {...props} />;
  });
