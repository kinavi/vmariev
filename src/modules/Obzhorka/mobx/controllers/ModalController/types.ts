export interface ModalType<PayloadType> {
  payload: PayloadType;
  onInitial: () => Promise<void>;
  reset: () => void;
}
