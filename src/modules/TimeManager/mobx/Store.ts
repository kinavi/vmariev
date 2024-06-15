import { makeAutoObservable } from 'mobx';
import { ApiService } from '../../../api/ApiService';
import { Status } from '../../../mobx/helpers/Status';
import { TaskController } from './controllers/TaskController';

export class Store {
  api;

  status: Status;

  controllers: {
    task: TaskController;
  };

  constructor(api: ApiService) {
    this.api = api;
    this.status = new Status();
    this.controllers = {
      task: new TaskController(api),
    };
    makeAutoObservable(this);
  }

  onInitial = async () => {
    this.controllers.task.onInitial()
  };
}
