import { z } from 'zod';
import { Field } from './ContactForm.constants';
import { ContactForm } from './ContactForm';

export const fieldValidationMap = {
    [Field.NAME]: z.string().min(1).max(ContactForm.shortMaxLength),
    [Field.EMAIL]: z.string().email().max(ContactForm.shortMaxLength),
    [Field.PHONE]: z.string().length(ContactForm.phoneLength),
    [Field.LOCATION]: z.string().max(ContactForm.shortMaxLength),
    [Field.MORE]: z.string().max(ContactForm.longMaxLength),
};

export const Fields = z.array(
    z.object({
        field: z.nativeEnum(Field),
        value: z.string(),
    })
);

export type Fields = z.infer<typeof Fields>;
