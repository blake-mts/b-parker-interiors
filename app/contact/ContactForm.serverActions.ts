'use server';

import { Fields, fieldValidationMap } from './ContactForm.validations';

export async function submitContactForm(fields: Fields) {
    try {
        const validation = Fields.safeParse(fields);

        if (!validation.success) {
            console.log(fields);
            console.log('fields validation failure\n\n', validation.error);
            return { error: true };
        }

        for (const fieldObject of fields) {
            const validation = fieldValidationMap[fieldObject.field].safeParse(
                fieldObject.value
            );

            if (!validation.success) {
                console.log(fieldObject);
                console.log('field validation failure\n\n', validation.error);
                return { error: true };
            }
        }

        return { error: false };
    } catch (error) {
        console.log(error);
        return { error: true };
    }
}
