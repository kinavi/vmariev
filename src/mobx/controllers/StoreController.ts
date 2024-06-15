import { makeAutoObservable } from 'mobx';
import { AuthController } from './AuthController';
import { ModalController } from './ModalController';

export class StoreController {
  controllers: {
    auth: AuthController;
  };

  modals: ModalController;

  constructor() {
    this.controllers = {
      auth: new AuthController(),
    };
    this.modals = new ModalController();
    makeAutoObservable(this);
  }
}
