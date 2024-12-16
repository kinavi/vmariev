import { makeAutoObservable, runInAction } from 'mobx';
import { Status } from '../../../mobx/helpers/Status';
import { apiServise } from '../../../api';
import { UserProgram } from './models/UserProgram';
import { MealEntriesController } from './controllers/MealEntriesController';

export class Store {
  status: Status;

  userProgram: UserProgram | null;

  mealEntries: MealEntriesController;

  constructor() {
    this.status = new Status();
    this.userProgram = null;
    this.mealEntries = new MealEntriesController();
    makeAutoObservable(this);
  }

  onInitial = async (currentUserId: number) => {
    if (this.status.isInitial) {
      const { userProgram } = apiServise.domains.objorka;
      this.status.updateStatus('loading');
      const program = await userProgram.getUserProgram(currentUserId);
      if (program) {
        this.setUserProgram(new UserProgram(program));
      }
      this.status.updateStatus('ready');
      this.mealEntries.onInitial();
    }
  };

  setUserProgram = (value: UserProgram | null) => {
    this.userProgram = value;
  };

  createProgram = async (data: {
    sex: 'MALE' | 'FEMALE';
    age: number;
    weight: number;
    height: number;
    physicalActivity: 'LOW' | 'LIGHT' | 'MIDDLE' | 'HIGH' | 'EXTREME';
    goal: 'MASS_GAIN' | 'NORMAL' | 'WEIGHT_LOSS';
    ratioCarbohydrates: number;
    ratioProteins: number;
    ratioFats: number;
    isExcludeActivity: boolean;
  }) => {
    const { createUserProgram } = apiServise.domains.objorka.userProgram;
    const result = await createUserProgram(data);
    if (result) {
      this.setUserProgram(new UserProgram(result));
    }
    return result !== null;
  };
}
