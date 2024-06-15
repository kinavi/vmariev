import { makeAutoObservable } from 'mobx';
import { ModalType } from '../../controllers/ModalController/types';
import { ReviewPayload } from './types';

export class ReviewReader implements ModalType<ReviewPayload> {
  payload: ReviewPayload;

  constructor() {
    this.payload = {
      name: '',
      rait: 0,
      text: '',
    };
    makeAutoObservable(this);
  }

  onInitial = async () => {};

  reset = () => {
    this.payload = {
      name: '',
      rait: 0,
      text: '',
    };
  };
}
