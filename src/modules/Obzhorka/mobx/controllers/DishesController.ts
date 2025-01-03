import { makeAutoObservable, runInAction } from 'mobx';
import { Status } from '../../../../mobx/helpers/Status';
import { apiServise } from '../../../../api';
import { Food } from '../models/Food';
import { Dish } from '../models/Dish';

export class DishesController {
  status: Status;

  list: Dish[] = [];

  constructor() {
    this.status = new Status();
    makeAutoObservable(this);
  }

  onInitial = async () => {
    if (!this.status.isInitial) {
      return;
    }
    const { loadSavedList } = apiServise.domains.objorka.dishes;
    this.status.updateStatus('loading');
    const result = await loadSavedList();
    runInAction(() => {
      this.list = result.map((item) => new Dish(item));
    });
    this.status.updateStatus('ready');
  };

  create = async (dishes: {
    title: string;
    foods: { food: Food; weight: number }[];
  }) => {
    const { create } = apiServise.domains.objorka.dishes;
    const result = await create({
      title: dishes.title,
      foods: dishes.foods.map((item) => ({
        foodId: item.food.id,
        weight: item.weight,
      })),
    });
    runInAction(() => {
      if (result) {
        this.list = [new Dish(result), ...this.list];
      }
    });
  };
}
