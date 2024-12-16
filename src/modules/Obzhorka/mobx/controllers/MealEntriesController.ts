import { makeAutoObservable } from 'mobx';
import { Status } from '../../../../mobx/helpers/Status';
import { MealEntry } from '../models/MealEntry';
import { apiServise } from '../../../../api';
import { MealEntriesApiDataType } from '../../../../api/ApiService/domains/Objorka/MealEntries/types';

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

  onInitial = async () => {
    if (this.status.isInitial) {
      this.status.updateStatus('loading');
      const result =
        await apiServise.domains.objorka.mealEntries.getMealEntries({
          targetDate: this.targetDate.toISOString(),
        });
      const _entries = result.map((item) => new MealEntry(item));
      this.setEntries(_entries);
      this.status.updateStatus('ready');
    }
  };

  setEntries = (value: MealEntry[]) => {
    this.entries = value;
  };
}
