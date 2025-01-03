import { makeAutoObservable, runInAction } from 'mobx';
import { Status } from '../../../../../mobx/helpers/Status';
import { Food } from '../../../mobx/models/Food';
import { apiServise } from '../../../../../api';

export class FoodController {
  status: Status = new Status();

  food: Food | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  onInitial = (foodId: number) => {
    if (!this.status.isInitial) {
      return;
    }
    this.status.updateStatus('loading');
    const { loadFoodById } = apiServise.domains.objorka.foods;
    return loadFoodById(foodId).then((result) => {
      runInAction(() => {
        if (result) {
          this.food = new Food(result);
        }
      });
      this.status.updateStatus('ready');
      return result;
    });
  };

  updateFood = async (fields: {
    title: string;
    proteins: number;
    fats: number;
    carbohydrates: number;
  }) => {
    if (!this.food) {
      return null;
    }
    const { updateFood } = apiServise.domains.objorka.foods;
    const result = await updateFood(this.food.id, fields);
    runInAction(() => {
      if (result) {
        this.food = new Food(result);
      }
    });
  };
}
