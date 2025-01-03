import { makeAutoObservable } from 'mobx';
import { ModalType } from '../../controllers/ModalController/types';
import { ReviewPayload } from './types';
import { Food } from '../../models/Food';

interface SelectFoodValue {
  food: Food;
  weight: number;
  key: string;
}

interface SelectFoodsPayload {
  value?: SelectFoodValue | null;
  onSubmit: (value: SelectFoodValue) => void;
}

export class SelectFoods implements ModalType<SelectFoodsPayload> {
  payload: SelectFoodsPayload;

  constructor() {
    this.payload = {
      onSubmit: () => {},
      value: null,
    };
    makeAutoObservable(this);
  }

  onInitial = async () => {};

  reset = () => {
    this.payload = {
      onSubmit: () => {},
      value: null,
    };
  };
}
