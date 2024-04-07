import { z } from 'zod';
import { Field } from './ContactForm.types';
import { ContactForm } from './ContactForm.class';

export const Fields = z.object({
    [Field.NAME]: z.string().min(1).max(ContactForm.shortMaxLength),
    [Field.EMAIL]: z.string().email().max(ContactForm.shortMaxLength),
    [Field.PHONE]: z.string().length(ContactForm.phoneLength + 4),
    [Field.LOCATION]: z.string().max(ContactForm.shortMaxLength),
    [Field.MORE]: z.string().max(ContactForm.longMaxLength),
});
