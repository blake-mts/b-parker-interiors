import { ChangeEventHandler } from 'react';

export enum Field {
    NAME = 'NAME',
    EMAIL = 'EMAIL',
    PHONE = 'PHONE',
    LOCATION = 'LOCATION',
    MORE = 'MORE',
}

export type TextFieldChangeEventHandler = ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
>;
