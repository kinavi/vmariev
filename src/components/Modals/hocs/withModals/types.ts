import { ModalController } from '../../../../mobx/controllers/ModalController';

type WithModalsComponentsType = {
  [key in keyof ModalController['modals']]: () => JSX.Element | null;
};

type WithModalsPropsType = {
  modal: keyof WithModalsComponentsType | null;
};

export type WithModalsType = (
  Components: WithModalsComponentsType
) => (props: WithModalsPropsType) => JSX.Element | null;
