import { makeAutoObservable } from 'mobx';
import { SelectFoods } from '../../modals/SelectFoods';
import { getObjectKeys } from '../../../../../helpers/functions';

export class ModalController {
  private pull: (keyof ModalController['modals'])[] = [];

  modals;

  constructor() {
    this.modals = {
      selectFoods: new SelectFoods(),
    };
    makeAutoObservable(this);
  }

  get showModal() {
    return this.pull[this.pull.length - 1];
  }

  onOpenModal = <
    T extends keyof ModalController['modals'],
    P extends ModalController['modals'][T] extends null
      ? undefined
      : NonNullable<ModalController['modals'][T]>['payload']
  >(
    value: T,
    payload?: P
  ) => {
    const _modal = this.modals[value];
    if (payload !== null && _modal && payload) {
      _modal.payload = payload;
    }
    this.modals[value]?.onInitial();
    this.pull.push(value);
  };

  onCloseLastModal = () => {
    const lastModal = this.pull.pop();
    if (lastModal && !!this.modals[lastModal]) {
      this.modals[lastModal]?.reset();
    }
  };

  onHardReset = () => {
    this.pull = [];
    getObjectKeys(this.modals).map((item) => this.modals[item]?.reset());
  };

  onSoftReset = () => {
    if (this.pull.length <= 1) {
      this.onHardReset();
    }
  };
}
