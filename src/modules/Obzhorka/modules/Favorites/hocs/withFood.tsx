import { Component, useState } from 'react';
import { WithFoodType } from './types';
import { Food } from '../../../mobx/models/Food';

export const withFood: WithFoodType = (Components) => (props) => {
  if (props.componentType === 'food') {
    return <Components.FoodListComponent />;
  } else {
    return <Components.DishListComponent />;
  }
};
