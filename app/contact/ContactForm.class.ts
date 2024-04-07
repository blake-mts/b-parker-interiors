import { AsYouType } from 'libphonenumber-js';
import { z } from 'zod';
import { ContactFormFields, ContactFormState } from './ContactForm.context';
import { ContactFormSubmission, Field } from './ContactForm.types';

export class ContactForm {
    static shortMaxLength = 100;
    static longMaxLength = 500;
    static phoneLength = 10;
    static requiredFields = [Field.NAME, Field.EMAIL, Field.PHONE];

    static removeNonDigitCharacters(value: string) {
        return value.replace(/\D/g, '');
    }

    static defaultValues: ContactFormFields = {
        NAME: {
            value: '',
            error: true,
            max: this.shortMaxLength,
            length: 0,
            required: true,
        },
        EMAIL: {
            value: '',
            error: true,
            max: this.shortMaxLength,
            length: 0,
            required: true,
        },
        PHONE: {
            value: '',
            error: true,
            max: this.phoneLength,
            length: 0,
            required: true,
            asYouType: new AsYouType('US'),
        },
        LOCATION: {
            value: '',
            max: this.shortMaxLength,
            length: 0,
        },
        MORE: {
            value: '',
            max: this.longMaxLength,
            length: 0,
        },
    };

    private value: string;
    private length = 0;
    private error = false;
    private field: Field;
    private state: ContactFormState;

    private get maxLength() {
        return ContactForm.defaultValues[this.field].max;
    }

    private constructor(field: Field, state: ContactFormState, value: string) {
        this.field = field;
        this.state = state;
        this.value = value;
        this.trimValue();
        this.validateField();
        this.updateState();
        this.validateForm();
    }

    static getUpdatedFormState(field: Field, state: ContactFormState, value: string) {
        const contactForm = new ContactForm(field, state, value);
        return contactForm.state;
    }

    static buildFields(state: ContactFormState, token: string): ContactFormSubmission {
        return {
            fields: Object.fromEntries(
                Object.entries(state.fields).map(([field, properties]) => [field, properties.value])
            ) as { [key in Field]: string },
            token,
        };
    }

    private trimValue() {
        if (this.field === Field.PHONE) {
            this.value = ContactForm.removeNonDigitCharacters(this.value);
        }

        this.value = this.value.substring(0, this.maxLength);
        this.length = this.value.length;
    }

    private validateField() {
        switch (this.field) {
            case Field.EMAIL:
                const validation = z.string().email().safeParse(this.value);

                if (!validation.success) {
                    this.error = true;
                    return;
                }
                break;

            case Field.PHONE:
                const asYouType = ContactForm.defaultValues.PHONE.asYouType;

                if (asYouType) {
                    asYouType.reset();
                    asYouType.input(this.value);
                    const phoneNumber = asYouType.getNumber();
                    this.value = phoneNumber?.formatNational() || this.value;
                }

                if (this.length <= this.maxLength) {
                    if (this.length < this.maxLength) {
                        this.error = true;
                        return;
                    }
                }

                break;
        }

        switch (this.field) {
            case Field.EMAIL:
            case Field.NAME:
                if (this.length === 0) {
                    this.error = true;
                    return;
                }
        }
    }

    private updateState() {
        this.state = {
            ...this.state,
            fields: {
                ...this.state.fields,
                [this.field]: {
                    ...this.state.fields[this.field],
                    error: this.error,
                    value: this.value,
                    length: this.length,
                },
            },
        };
    }

    private validateForm() {
        for (const field of ContactForm.requiredFields) {
            const error = this.state.fields[field].error;
            if (error !== undefined && error) {
                this.state.valid = false;
                return;
            }
        }

        this.state.valid = true;
    }
}
