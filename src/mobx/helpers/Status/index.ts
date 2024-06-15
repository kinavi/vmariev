import { makeAutoObservable } from 'mobx';
import { StatusType } from './types';

export class Status {
  value: StatusType;

  constructor(initial: StatusType = 'initial') {
    this.value = initial;
    makeAutoObservable(this);
  }

  get isSuccess() {
    return this.value === 'success';
  }

  get isInitial() {
    return this.value === 'loading';
  }

  get isLoading() {
    return this.value === 'loading';
  }

  get isError() {
    return this.value === 'error';
  }

  get isSended() {
    return this.value === 'sended';
  }

  get isReady() {
    return this.value === 'ready';
  }

  get isSubmitting() {
    return this.value === 'submitting';
  }

  updateStatus = (value: StatusType) => {
    this.value = value;
  };
}
