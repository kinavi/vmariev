import { makeAutoObservable, runInAction } from 'mobx';
import { Status } from '../../../../../mobx/helpers/Status';
import { apiServise } from '../../../../../api';
import { Dish } from '../../../mobx/models/Dish';

export class DishController {
  status: Status = new Status();

  food: Dish | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  onInitial = (foodId: number) => {
    if (!this.status.isInitial) {
      return;
    }
    this.status.updateStatus('loading');
    const { loadFoodById } = apiServise.domains.objorka.dishes;
    return loadFoodById(foodId).then((result) => {
      runInAction(() => {
        if (result) {
          this.food = new Dish(result);
        }
      });
      this.status.updateStatus('ready');
      return result;
    });
  };

  updateFood = async (fields: {
    title: string;
    foods: {
      foodId: number;
      weight: number;
    }[];
  }) => {
    if (!this.food) {
      return null;
    }
    const { update } = apiServise.domains.objorka.dishes;
    const result = await update(this.food.id, fields);
    runInAction(() => {
      if (result) {
        this.food = new Dish(result);
      }
    });
  };
}
