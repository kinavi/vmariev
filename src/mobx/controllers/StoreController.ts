import { makeAutoObservable } from 'mobx';
import { AuthController } from './AuthController';
import { ModalController } from './ModalController';

class UserProgram {
  // program

  constructor() {
    makeAutoObservable(this);
  }

  loadProfram = async () => {

  }
}

export class StoreController {
  controllers: {
    auth: AuthController;
  };

  userProgram: UserProgram;

  modals: ModalController;

  constructor() {
    this.controllers = {
      auth: new AuthController(),
    };
    this.userProgram = new UserProgram();
    this.modals = new ModalController();
    makeAutoObservable(this);
  }
}
