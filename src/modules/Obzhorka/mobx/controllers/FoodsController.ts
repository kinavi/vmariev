import { makeAutoObservable, runInAction } from 'mobx';
import { Status } from '../../../../mobx/helpers/Status';
import { apiServise } from '../../../../api';
import { Food } from '../models/Food';

export class FoodsController {
  status: Status;

  list: Food[] = [];

  constructor() {
    this.status = new Status();
    makeAutoObservable(this);
  }

  onInitial = async () => {
    if (!this.status.isInitial) {
      return;
    }
    const { loadSavedFoods } = apiServise.domains.objorka.foods;
    this.status.updateStatus('loading');
    const result = await loadSavedFoods();
    runInAction(() => {
      this.list = result.map((item) => new Food(item));
    });
    this.status.updateStatus('ready');
  };

  create = async (food: {
    title: string;
    carbohydrates: number;
    fats: number;
    proteins: number;
  }) => {
    const { createFood } = apiServise.domains.objorka.foods;
    const result = await createFood({
      title: food.title,
      carbohydrates: food.carbohydrates,
      fats: food.fats,
      proteins: food.proteins,
    });
    runInAction(() => {
      if (result) {
        this.list = [new Food(result), ...this.list];
      }
    });
  };
}
