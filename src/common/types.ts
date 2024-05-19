export interface IKeyable {
    key: string;
}

export interface IIdContain {
    id: number | string;
}

interface GlobalConstantsType<T> {
    __INITIAL_DATA__: T;
    JsComponents: {
        Init(): void,
    };
}

export type WindowWithConstantsType<T> = Window & typeof globalThis & GlobalConstantsType<T>;

export type StatusType = 'initial' | 'ready' | 'loading' | 'error' | 'success' | 'Sending'

export interface IField<T> {
    value: T;
    required?: boolean;
    error?: string;
    messageEmptyError?: string;
    convertString?: (value: any) => string;
    isDisable?: boolean;
}

export type FieldsType<T> = {
    status: StatusType;
    fields:T;
}