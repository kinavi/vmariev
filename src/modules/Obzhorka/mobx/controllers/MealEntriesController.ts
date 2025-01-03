import { makeAutoObservable, runInAction } from 'mobx';
import { Status } from '../../../../mobx/helpers/Status';
import { MealEntry } from '../models/MealEntry';
import { apiServise } from '../../../../api';
import { MealEntriesApiDataType } from '../../../../api/ApiService/domains/Objorka/MealEntries/types';
import isSameDay from 'date-fns/isSameDay';
import subDays from 'date-fns/subDays';
import addDays from 'date-fns/addDays';

export class MealEntriesController {
  status: Status;

  entries: MealEntry[];

  targetDate: Date;

  constructor() {
    this.status = new Status();
    this.entries = [];
    this.targetDate = new Date();
    makeAutoObservable(this);
  }

  get currentEatenCalories() {
    return this.entries.reduce<number>((acc, item) => {
      const food = item.food;
      const dish = item.dish;
      if (food) {
        const currentEatenCarbohydrates =
          (food.carbohydrates * 4 * item.weight) / 100 +
          (food.proteins * 4 * item.weight) / 100 +
          (food.fats * 9 * item.weight) / 100;
        return acc + currentEatenCarbohydrates;
      }
      if (dish) {
        const currentEatenCarbohydrates =
          (item.weight / dish.totalWeight) * dish.totalСalories;
        return acc + currentEatenCarbohydrates;
      }
      return acc;
    }, 0);
  }

  get currentEatenProteins() {
    return this.entries.reduce<number>((acc, item) => {
      const food = item.food;
      const dish = item.dish;
      if (food) {
        return acc + (item.weight / 100) * food.proteins * 4;
      }
      if (dish) {
        return (
          acc + (item.weight / dish.totalWeight) * dish.totalProteinsСalories
        );
      }
      return acc;
    }, 0);
  }

  get currentEatenFats() {
    return this.entries.reduce<number>((acc, item) => {
      const food = item.food;
      const dish = item.dish;
      if (food) {
        return acc + (item.weight / 100) * food.fats * 9;
      }
      if (dish) {
        return acc + (item.weight / dish.totalWeight) * dish.totalFatsСalories;
      }
      return acc;
    }, 0);
  }

  get currentEatenCarbohydrates() {
    return this.entries.reduce<number>((acc, item) => {
      const food = item.food;
      const dish = item.dish;
      if (food) {
        return acc + (item.weight / 100) * food.carbohydrates * 4;
      }
      if (dish) {
        return (
          acc +
          (item.weight / dish.totalWeight) * dish.totalCarbohydratesСalories
        );
      }
      return acc;
    }, 0);
  }

  onInitial = async () => {
    if (this.status.isInitial) {
      this.loadEntries();
    }
  };

  loadEntries = async () => {
    this.status.updateStatus('loading');
    const result = await apiServise.domains.objorka.mealEntries.getMealEntries({
      targetDate: this.targetDate.toISOString(),
    });
    const _entries = result.map((item) => new MealEntry(item));
    this.setEntries(_entries);
    this.status.updateStatus('ready');
  };

  setEntries = (value: MealEntry[]) => {
    this.entries = value;
  };

  create = async (fields: {
    entryId: number;
    weight: number;
    entryType: 'dish' | 'food';
  }) => {
    const { create } = apiServise.domains.objorka.mealEntries;
    const result = await create(fields);
    runInAction(() => {
      if (result) {
        this.entries.push(new MealEntry(result));
      }
    });
  };

  toggleTargetDate = async (newDate: Date) => {
    this.targetDate = newDate;
    this.loadEntries();
  };

  setPreventDay = () => {
    const updatedDate = subDays(this.targetDate, 1);
    this.toggleTargetDate(updatedDate);
  };

  setNextDate = () => {
    const updatedDate = addDays(this.targetDate, 1);
    this.toggleTargetDate(updatedDate);
  };
}
