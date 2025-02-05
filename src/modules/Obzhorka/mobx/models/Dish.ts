import { makeAutoObservable } from 'mobx';
import { DishApiDataType } from '../../../../api/ApiService/domains/Objorka/Dishes/types';
import { Food } from './Food';

export class Dish {
  id;
  createdAt;
  status;
  title;
  user;
  foods: { food: Food; weight: number }[];
  constructor(initialData: DishApiDataType) {
    const { createdAt, foods, id, status, title, user } = initialData;
    this.id = id;
    this.createdAt = createdAt;
    this.status = status;
    this.title = title;
    this.user = user;
    this.foods = foods.map((item) => ({
      food: new Food(item),
      weight: item.dishInfo.weight,
    }));
    makeAutoObservable(this);
  }

  get totalWeight() {
    return this.foods.reduce((acc, item) => {
      return acc + item.weight;
    }, 0);
  }

  get totalProteinsCalories() {
    return this.foods.reduce((acc, item) => {
      const result = (item.food.proteins * 4 * item.weight) / 100;
      return acc + result;
    }, 0);
  }

  get totalFatsCalories() {
    return this.foods.reduce((acc, item) => {
      const result = (item.food.fats * 9 * item.weight) / 100;
      return acc + result;
    }, 0);
  }

  get totalCarbohydratesСalories() {
    return this.foods.reduce((acc, item) => {
      const result = (item.food.carbohydrates * 4 * item.weight) / 100;
      return acc + result;
    }, 0);
  }

  get totalCalories() {
    return (
      this.totalProteinsCalories +
      this.totalFatsCalories +
      this.totalCarbohydratesСalories
    );
  }
}
