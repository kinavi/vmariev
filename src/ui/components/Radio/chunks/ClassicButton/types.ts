export type TabProps<Type> = {
  isActive: boolean;
  value: { value: Type; label: string | JSX.Element };
  onClick(): void;
  isDisable?: boolean;
  // pattern: 'groups' | 'group' | 'sign-in';
};

export type TabType = <Type>(props: TabProps<Type>) => JSX.Element;
