import { InputAdornment, TextField, TextFieldProps } from '@mui/material';
import { useField } from '../ContactForm.context';
import { CheckCircle, Error } from '@mui/icons-material';
import { Field } from '../ContactForm.types';

export interface FormFieldProps extends Omit<TextFieldProps, 'id'> {
    id: Field;
}

export default function FormField({ id, ...rest }: FormFieldProps) {
    const { field, onChange, submitting } = useField(id);

    return (
        <TextField
            value={field.value}
            onChange={onChange}
            {...rest}
            name={id}
            variant="outlined"
            multiline
            disabled={submitting}
            color={field.required && !field.error ? 'success' : 'secondary'}
            {...(field.required && {
                InputProps: {
                    endAdornment: (
                        <InputAdornment position="end">
                            {field.error ? <Error color="warning" /> : <CheckCircle color="success" />}
                        </InputAdornment>
                    ),
                },
            })}
            {...(field.required &&
                !field.error && {
                    focused: true,
                })}
        />
    );
}
