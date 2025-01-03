import { WithFoodType } from './types';

export const withFood: WithFoodType = (Components) => (props) => {
  if (props.componentType === 'food') {
    return <Components.FoodListComponent />;
  } else {
    return <Components.DishListComponent />;
  }
};
