import { makeAutoObservable } from 'mobx';
import { MealEntriesApiDataType } from '../../../../api/ApiService/domains/Objorka/MealEntries/types';
import { UserProgram } from './UserProgram';

export class MealEntry {
  id;

  food;

  user;

  weight;

  createdAt;

  userProgram;

  constructor(private initialData: MealEntriesApiDataType) {
    const { food, id, user, weight, createdAt, userProgram } = initialData;
    this.id = id;
    this.food = food;
    this.user = user;
    this.weight = weight;
    this.createdAt = createdAt;
    this.userProgram = new UserProgram(userProgram);
    makeAutoObservable(this);
  }
}
