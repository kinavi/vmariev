import { makeAutoObservable, runInAction } from 'mobx';
import { apiServise } from '../../api';
import { IErrorResponse } from '../../api/ApiService/types';
import { token } from '../../api/Token';

const DEFAULT_TIME_VALUE = 30;

export class AuthController {
  error: IErrorResponse | null = null;

  isSendedCode = false;

  // isConfirmCode = false;

  codeTimer = DEFAULT_TIME_VALUE;

  constructor() {
    makeAutoObservable(this);
  }

  login = async (values: { email: string; password: string }) => {
    const result = await apiServise.domains.auth.signIn(values);
    if (result.status === 'error') {
      this.error = result;
      return false;
    }
    token.save(result.data);
    return true;
  };

  register = async (values: {
    email: string;
    code: number;
    password: string;
  }) => {
    const result = await apiServise.domains.auth.signUp(values);
    if (result.status === 'error') {
      this.error = result;
      return false;
    }
    token.save(result.data);
    return true;
  };

  createOffer = async (email: string) => {
    const result = await apiServise.domains.auth.createOffer({ email });
    runInAction(() => {
      if (result.status === 'error') {
        this.error = result;
        this.isSendedCode = false;
        return false;
      }
      this.isSendedCode = true;
      this.codeTimer = DEFAULT_TIME_VALUE;
      this.error = null;
      return true;
    });
  };

  // confirOffer = async (email: string, code: number) => {
  //   const result = await apiServise.domains.auth.confirmOffer({
  //     email,
  //     code,
  //   });
  //   runInAction(() => {
  //     if (result.status === 'error') {
  //       this.error = result;
  //       this.isConfirmCode = false;
  //       return false;
  //     }
  //     this.isConfirmCode = true;
  //     this.error = null;
  //     return true;
  //   });
  // };

  updateCodeTime = (value: number) => {
    this.codeTimer = value;
  };
}
