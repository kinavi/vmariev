import { makeAutoObservable, runInAction } from 'mobx';
import { Status } from '../../../../../mobx/helpers/Status';
import { apiServise } from '../../../../../api';
import { Dish } from '../../../mobx/models/Dish';

export class DishController {
  status: Status = new Status();

  dish: Dish | null = null;

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
          this.dish = new Dish(result);
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
    status?: Dish['status']
  }) => {
    if (!this.dish) {
      return;
    }
    const { update } = apiServise.domains.objorka.dishes;
    const result = await update(this.dish.id, fields);
    runInAction(() => {
      if (result) {
        this.dish = new Dish(result);
      }
    });
  };
}
