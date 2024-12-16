import { makeAutoObservable } from 'mobx';

export class UserProgramController {
    

  constructor() {
    makeAutoObservable(this);
  }


}
