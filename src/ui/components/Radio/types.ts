export interface IContentProperties {
  id: string;
  Content: string | JSX.Element;
  isFocus?: boolean;
  isChecked?: boolean;
  isDisable?: boolean;
}

export type IRadioOption = {
  value: number | string;
  isDisable?: boolean;
  isChecked?: boolean;
  Content: string | JSX.Element;
};

export type RadioPropsType<T> = {
  name: string;
  id: string;
  value: string | number | null;
  onChange(value: string | number): void;
  className?: string;
  isDisable?: boolean;
  gap?: number;
  children: T[];
  direction?: 'column' | 'row';
};

export type ItemPropsType<T> = {
  item: T;
  name: string;
  id: string;
  isChecked: boolean;
  onChange(): void;
};

export type WrapperRadioItemPropsType<T> = {
  name: string;
  value: string | number;
  isDisable: boolean;
  onChange(value: string | number): void;
  item: T;
  className: string;
};

export type FocusWrapperType = <T extends IContentProperties>(
  props: WrapperRadioItemPropsType<T> & {
    children(arg: {
      onClick: () => void;
      isFocus: boolean;
      isChecked: boolean;
    }): JSX.Element;
  }
) => JSX.Element;

export type WithFocusType = <T extends IContentProperties>(
  Component: (props: IContentProperties & { onClick(): void }) => JSX.Element
) => (props: WrapperRadioItemPropsType<T>) => JSX.Element;

export type WithGroupRadioType = <
  T extends Omit<IContentProperties, 'onChange'>
>(
  Component: (props: WrapperRadioItemPropsType<T>) => JSX.Element
) => (props: RadioPropsType<T>) => JSX.Element | null;
