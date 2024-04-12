export type RowPatternFieldType = <
  Props extends { pattern?: 'row' | 'column' }
>(Component: {
  Row: (props: Props) => JSX.Element;
  Column: (props: Props) => JSX.Element;
}) => (props: Props) => JSX.Element;
