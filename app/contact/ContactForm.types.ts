import { ChangeEventHandler } from 'react';

import { z } from 'zod';
import { Fields } from './ContactForm.validations';

export const SUCCESS_RESPONSE_TYPE = 'SUCCESS';

export enum Field {
    NAME = 'NAME',
    EMAIL = 'EMAIL',
    PHONE = 'PHONE',
    LOCATION = 'LOCATION',
    MORE = 'MORE',
}

export type Fields = z.infer<typeof Fields>;

export type TextFieldChangeEventHandler = ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;

export interface ContactFormSubmission {
    fields: Fields;
    token: string;
}

export enum ErrorResponseType {
    INVALID_RECAPTCHA_TOKEN = 'INVALID_RECAPTCHA_TOKEN',
}

export type ResponseType = typeof SUCCESS_RESPONSE_TYPE | ErrorResponseType;
