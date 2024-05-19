import { makeAutoObservable } from 'mobx';
import { AuthController } from './AuthController';

export class StoreController {
  controllers: {
    auth: AuthController;
  };
  constructor() {
    this.controllers = {
      auth: new AuthController(),
    };
    makeAutoObservable(this);
  }
}
