import { makeAutoObservable } from 'mobx';
import { MealEntriesApiDataType } from '../../../../api/ApiService/domains/Objorka/MealEntries/types';
import { UserProgram } from './UserProgram';
import { Dish } from './Dish';
import { Food } from './Food';

export class MealEntry {
  id;

  food;

  dish;

  user;

  weight;

  createdAt;

  userProgram;

  entryType;

  constructor(private initialData: MealEntriesApiDataType) {
    const { id, user, weight, createdAt, userProgram } = initialData;
    this.id = id;
    this.entryType = initialData.entryType;
    this.food =
      initialData.entryType === 'food' ? new Food(initialData.food) : null;
    this.dish =
      initialData.entryType === 'dish' ? new Dish(initialData.dish) : null;
    this.user = user;
    this.weight = weight;
    this.createdAt = createdAt;
    this.userProgram = new UserProgram(userProgram);
    makeAutoObservable(this);
  }

  get titel() {
    if (this.entryType === 'dish') {
      return this.dish?.title;
    }
    return this.food?.title;
  }

  get totalCalories() {
    if (this.entryType === 'dish' && this.dish) {
      return (this.dish.totalCalories / this.dish.totalWeight) * this.weight;
    }
    return this.food ? (this.food.totalCalories * this.weight) / 100 : 0;
  }

  get totalProteinsСalories() {
    if (this.entryType === 'dish' && this.dish) {
      return (
        (this.dish.totalProteinsCalories / this.dish.totalWeight) * this.weight
      );
    }
    return this.food
      ? (this.food.totalProteinsСalories * this.weight) / 100
      : 0;
  }
}
