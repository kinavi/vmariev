import { makeAutoObservable } from 'mobx';
import { FoodApiDataType } from '../../../../api/ApiService/domains/Objorka/Foods/types';

export class Food {
  id;

  carbohydrates;

  fats;

  proteins;

  title;

  constructor(initialData: FoodApiDataType) {
    const { carbohydrates, fats, id, proteins, title } = initialData;
    this.id = id;
    this.carbohydrates = carbohydrates;
    this.fats = fats;
    this.proteins = proteins;
    this.title = title;
    makeAutoObservable(this);
  }

  get totalCalories() {
    return this.carbohydrates * 4 + this.fats * 9 + this.proteins * 4;
  }

  get totalProteinsСalories() {
    return this.proteins * 4;
  }
}
