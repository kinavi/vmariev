import React from 'react';
import { Food } from '../../../mobx/models/Food';
import { Dish } from '../../../mobx/models/Dish';
import { Status } from '../../../../../mobx/helpers/Status';

export type WithFoodType = (Components: {
  FoodListComponent: () => React.JSX.Element;
  DishListComponent: () => React.JSX.Element;
}) => (props: { componentType: 'dish' | 'food' }) => React.JSX.Element;

export type WithLoaderType = <ComponentPropsType>(
  Component: (props: ComponentPropsType) => React.JSX.Element
) => (props: { status: Status } & ComponentPropsType) => React.JSX.Element;
