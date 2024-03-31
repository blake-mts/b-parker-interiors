'use client';

import { COLORS } from '@/constants/colors.constants';
import { useSmallScreen } from '@/hooks/useSmallScreen';
import { outfit } from '@/theme/theme';
import { Box, Button, Card, Typography } from '@mui/material';
import { FormEventHandler, useState } from 'react';
import { ContactForm } from '../ContactForm.class';
import { Field } from '../ContactForm.constants';
import { submitContactForm } from '../ContactForm.serverActions';
import ErrorDialog from './ContactFormErrorDialog';
import { useContactForm } from '../ContactForm.context';
import FormField from './ContactFormField';
import HelpText from './ContactFormHelpText';
import SuccessDialog from './ContactFormSuccessDialog';

export default function EmailForm() {
    const [errorDialog, setErrorDialog] = useState(false);
    const [successDialog, setSuccessDialog] = useState(false);

    const small = useSmallScreen();
    const { state, setSubmitting, resetForm } = useContactForm();

    const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        try {
            event.preventDefault();
            setSubmitting(true);

            await submitContactForm(ContactForm.buildFields(state));

            setSuccessDialog(true);
            resetForm();
        } catch (error) {
            setErrorDialog(true);
            setSubmitting(false);
        }
    };

    return (
        <>
            <Card
                sx={{
                    flexGrow: 1,
                    p: small ? 2 : 4,
                    maxWidth: '50rem',
                    backgroundColor: COLORS.smokeyGray,
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        mb: small ? 2 : 4,
                        fontWeight: 300,
                    }}
                    fontFamily={outfit.style.fontFamily}
                >
                    CONTACT US
                </Typography>
                <form onSubmit={onSubmit}>
                    <Box sx={{ display: 'grid', gap: small ? 2 : 4 }}>
                        <FormField label="Name *" id={Field.NAME} />
                        <FormField label="Email *" id={Field.EMAIL} />
                        <FormField label="Phone *" id={Field.PHONE} />
                        <FormField
                            label="Where is your project located?"
                            id={Field.LOCATION}
                        />
                        <FormField
                            label="Tell us about your project!"
                            id={Field.MORE}
                            rows={4}
                        />
                        <Box>
                            <Button
                                size="large"
                                disabled={!state.valid || state.submitting}
                                color="secondary"
                                variant="contained"
                                type="submit"
                                sx={{ mb: 2 }}
                            >
                                Submit
                            </Button>
                            <HelpText />
                        </Box>
                    </Box>
                </form>
            </Card>
            <ErrorDialog state={errorDialog} setState={setErrorDialog} />
            <SuccessDialog state={successDialog} setState={setSuccessDialog} />
        </>
    );
}
