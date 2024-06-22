import React from 'react';
import { WithModePropsType, ComponentType } from '../types';
import { Icons } from '../../UI/Icons';

export const withMode =
  (Component: ComponentType) => (props: WithModePropsType) => {
    const { onSave, isReadonly, onRemove, ...propsComponent } = props;

    return isReadonly ? (
      <Component.View
        {...propsComponent}
        isReadonly={isReadonly}
      />
    ) : (
      <Component.Edit
        {...propsComponent}
        isReadonly={isReadonly}
        leftIcon={Icons.cross}
        onSave={onSave}
        onRemove={onRemove}
      />
    );
  };
