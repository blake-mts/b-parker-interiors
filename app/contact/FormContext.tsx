'use client';

import { AsYouType } from 'libphonenumber-js';
import {
    ChangeEvent,
    Dispatch,
    PropsWithChildren,
    Reducer,
    createContext,
    useContext,
    useReducer,
} from 'react';
import { ContactForm } from './ContactForm';
import { Field } from './ContactForm.constants';

export enum ContactFormActionType {
    UPDATE_FIELD = 'UPDATE_FIELD',
    SET_SUBMITTING = 'SET_SUBMITTING',
    RESET = 'RESET',
}

export type ContactFormField = {
    value: string;
    max: number;
    length: number;
    required?: boolean;
    error?: boolean;
    asYouType?: AsYouType;
};

export type ContactFormFields = {
    [key in Field]: ContactFormField;
};

export interface ContactFormState {
    fields: ContactFormFields;
    valid: boolean;
    submitting: boolean;
}

type ContactFormActionGeneric<P, T extends ContactFormActionType> = {
    payload: P;
    type: T;
};

type UpdateField = ContactFormActionGeneric<
    {
        field: Field;
        value: string;
    },
    ContactFormActionType.UPDATE_FIELD
>;

type SetSubmitting = ContactFormActionGeneric<
    boolean,
    ContactFormActionType.SET_SUBMITTING
>;

type ResetForm = ContactFormActionGeneric<
    undefined,
    ContactFormActionType.RESET
>;

type ContactFormAction = UpdateField | SetSubmitting | ResetForm;

interface ContactFormContext {
    state: ContactFormState;
    dispatch: Dispatch<ContactFormAction>;
}

type FormFieldEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const ContactFormContext = createContext<ContactFormContext | undefined>(
    undefined
);

const defaultState = {
    fields: ContactForm.defaultValues,
    valid: false,
    submitting: false,
};

function contactFormReducer(
    state: ContactFormState,
    { payload, type }: ContactFormAction
) {
    switch (type) {
        case ContactFormActionType.UPDATE_FIELD:
            const { field, value } = payload;
            return ContactForm.getUpdatedFormState(field, state, value);
        case ContactFormActionType.SET_SUBMITTING:
            return {
                ...state,
                submitting: payload,
            };
        case ContactFormActionType.RESET:
            return {
                ...defaultState,
            };
    }
}

export function ContactFormProvider({ children }: PropsWithChildren) {
    const [state, dispatch] = useReducer<
        Reducer<ContactFormState, ContactFormAction>
    >(contactFormReducer, defaultState);

    const value = { state, dispatch };

    return (
        <ContactFormContext.Provider value={value}>
            {children}
        </ContactFormContext.Provider>
    );
}

function useContactFormContext() {
    const context = useContext(ContactFormContext);

    if (context === undefined) {
        throw Error('Can only be used within ContactFormContext.');
    }

    return context;
}

export function useField(field: Field) {
    const { state, dispatch } = useContactFormContext();

    const onChange = (event: FormFieldEvent) => {
        const value = event.target.value;

        dispatch({
            payload: {
                field,
                value,
            },
            type: ContactFormActionType.UPDATE_FIELD,
        });
    };

    return {
        field: state.fields[field],
        onChange,
        submitting: state.submitting,
    };
}

export function useContactForm() {
    const { state, dispatch } = useContactFormContext();

    const values = {
        state,
        setSubmitting(payload: boolean) {
            dispatch({
                type: ContactFormActionType.SET_SUBMITTING,
                payload,
            });
        },
        resetForm() {
            dispatch({
                type: ContactFormActionType.RESET,
                payload: undefined,
            });
        },
    };

    return values;
}
