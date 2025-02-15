import { Dish } from '../../mobx/models/Dish';
import { Food } from '../../mobx/models/Food';

export interface DishEditorField {
  title: string;
  foods: { food: Food; weight: number; key: string }[];
  status: Dish['status'];
}
