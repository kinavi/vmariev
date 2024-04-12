export type CheckBoxPropsType = {
    value: boolean;
    label?: string | JSX.Element;
    onChange(updateValue: boolean): void;
    isDisable?: boolean;
    id?: string;
    className?: string;
    direction?: 'left' | 'right';
    sizeIndicator?: '16' | '18';
    labelClass?: string;
}
